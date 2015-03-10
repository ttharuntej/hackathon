/**
 * Created by xwang17 on 10/16/14.
 */
var logger = require("../../utils/logger");
var CronJob = require('cron').CronJob;
var events = require('events');
var pig = require('./pigActionHelper');
var exec = require('child_process').exec;
var utils = require('./utils')

function Scheduler(fileName, period, params, callback){
//
//    this.fileName = fileName;
//    this.period = period;
//    this.params = params;
//    this.callback = callback;
    var retryCount = params.retry;
    var retryRegisterCount = 3;
    var timerId;

    function log(msg){
        logger.info(msg)
    }

    function generateLocation(fileName){
        var fileLocation = './server/public/pig/'+fileName;
        return fileLocation;
    }

    // private
    var runScript = function(){
        retryRegisterCount = 3;
        retryCount = params.retry; // reset retryCount
        pig.unregister(fileName, register);
    }

    function register(res){
        log(res + " : " + fileName);
        if(retryRegisterCount > 0){
            retryRegisterCount--;
            log("retryRegisterCount: " + retryRegisterCount);
            pig.register(fileName, generateLocation(fileName), submitJob);
        }
    }

    function submitJob(res){
        log("PIG -- "+ fileName +" Registered file: " +res);
        log('retryCount = ' + retryCount);
        if(retryCount > 0){
            retryCount = retryCount - 1;
            log('retryCount = ' + retryCount);
            params.data.inputParameters.startDate = utils.getMinutesBeforeNow(60 + params.range);
            params.data.inputParameters.endDate = utils.getMinutesBeforeNow(60);
            log("PIG -- "+"Job submitting: " + JSON.stringify(params));
            pig.submit(fileName, params, afterSubmit);
        }else{
            log("Stop retry");

        }
    }

    function afterSubmit(jobIdRes){
        log("PIG -- "+fileName +" job " + jobIdRes + " has been submitted");
        if(jobIdRes !== "Script does not exist"){
            timerId = setInterval(function () {
                pig.status(jobIdRes, checkStatus);
            }, 10000);
        }else{
            log("Script does not exist: " + fileName);

            // if submit failed by "Script does not exist",
            // will not retry, just wait for next period
            runScript();
        }
    };


    function checkStatus(status, jobIdRes){
        log("PIG -- "+fileName+" job "+jobIdRes + " status: " + status);
        if(status === "SUBMITTED"){
            // continue, do nothing
        }else if(status === "SUCCEEDED"){
            // clear and callback
            log("timerId:" + timerId.toString());
            clearInterval(timerId);
            pig.retrieveOutput(jobIdRes, afterSucceeded);
        }else{
            log("timerId:" + timerId.toString());
            clearInterval(timerId);
            log("PIG -- Job "+jobIdRes+" failed!");

            //retry with 6 sec delay
            setTimeout(submitJob, 6000, "Retry");
        }
    }

    function afterSucceeded(res){
        if (callback && typeof(callback) === "function") {
            callback(res, params);
        } else {
            log(callback)
        }
    }


    var runPeriod = function (){
        var job = new CronJob({cronTime : period,
                onTick : function(){
                    runScript();
                },
                start:true,
                timeZone: "America/Los_Angeles"}
        );
        job.start();
    }

    // public
    this.runScript = runScript;
    this.runPeriod = runPeriod;
}

function getScheduler(fileName, period, params, callback){
    return new Scheduler(fileName+'.pig', period, params, callback);
}


module.exports.getScheduler = getScheduler;


