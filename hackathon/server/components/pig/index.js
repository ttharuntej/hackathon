'use strict';
var Scheduler = require('./pigScheduler');
var utils = require('./utils');
var logger = require("../../utils/logger");
var pigParams = require('./pigParams');
var cbs = require('./processor');

var defaultParams = {
    period:"0 */30 * * * *",
    range:60,
    retry: 1,
    data:{
        "inputParameters":
        {   "startDate":utils.genStartDate(),
            "endDate":utils.genEndDate(),
            "env":"null",
            "pool":"r1ordersvc",
            "machine":"null",
            "colo":"null",
            "sampling":"1"
        }

    }
}

/**
 * name: startAll
 * start all registered scripts
 * @param params
 * @returns {*}
 */
function startAll(){

    // COSMOS
    start("longUrl3Sec", cbs.cosmosLongUrl3SecCallBack, "0 */55 * * * *", pigParams.cosmosTestPig);
    start("longUrl4Sec", cbs.cosmosLongUrl4SecCallBack, "0 */55 * * * *", pigParams.cosmosTestPig);
//
//    // API
    start("Errorcounts", cbs.apiErrorCallBack, "0 */60 * * * *", pigParams.apiTestPig);
    start("Reqtimeout120", cbs.apiTimeoutCallBack, "0 */60 * * * *", pigParams.apiTestPig);
    start("Errorcounts", cbs.apiErrorCallBack, "0 */60 * * * *", pigParams.apiIntlPig);
    start("Reqtimeout120", cbs.apiTimeoutCallBack, "0 */60 * * * *", pigParams.apiIntlPig);
    start("RCSErrorCounts",  cbs.apiRCSErrorCountCallBack, "0 */60 * * * *", pigParams.apiTestPig);
//
//    // coms-data
////    start("ComsDataUnexpectedError",  cbs.comsData2CallBack, "0 */5 * * * *", pigParams.comsDataAllPig);
    start("ComsDataLookupSyncError",  cbs.comsDataCallBack, "0 0 */2 * * *", pigParams.comsDataPig);
    start("ComsDataLookupWriteSyncFailure",  cbs.comsDataCallBack, "0 0 */2 * * *", pigParams.comsDataPig);
    start("ComsDataLookupWriteSyncFailure1",  cbs.comsDataCallBack, "0 0 */2 * * *", pigParams.comsDataPig);
    start("ComsDataPrimarySyncOrderLookupExp",  cbs.comsDataCallBack, "0 0 */2 * * *", pigParams.comsDataPig);
    start("ComsDataPrimarySyncOrderLookupExp1",  cbs.comsDataCallBack, "0 0 */2 * * *", pigParams.comsDataPig);
    start("ComsDataPrimarySyncPOLookupExp",  cbs.comsDataCallBack, "0 0 */2 * * *", pigParams.comsDataPig);
    start("ComsDataPrimarySyncPOLookupExp1",  cbs.comsDataCallBack, "0 0 */2 * * *", pigParams.comsDataPig);
}

/**
 * name: start
 * start one registered scripts
 * @param params
 * @returns {*}
 */
function start(script, callback, period, params) {
    // TODO check all params
//    log(JSON.stringify(defaultParams));

    if(!period){
        period = defaultParams.period;
    }
    log("period: " + period);
    var finalParams = generateParams(params);    // generate new params
    var scheduler = Scheduler.getScheduler(script, period, finalParams, callback);
    scheduler.runPeriod();
}

/**
 *
 * @param params
 * @returns {*}
 */
function generateParams(params){
    var finalParams = JSON.parse(JSON.stringify(defaultParams));
    if(params === undefined){
        params = {};
    }
    if(params.data === undefined){
        params.data = defaultParams.data;
    }else{
        log("params data override");

        if(params.range !== undefined){
            finalParams.range = params.range;
        }

        if(params.retry !== undefined){
            finalParams.retry = params.retry;
        }

        if(params.data.inputParameters !== undefined){
            // override existing params in default
            if(params.data.inputParameters.startDate != undefined){
                finalParams.data.inputParameters.startDate = params.data.inputParameters.startDate;
            }
            if(params.data.inputParameters.endDate != undefined){
                finalParams.data.inputParameters.endDate = params.data.inputParameters.endDate;
            }
            if(params.data.inputParameters.env!= undefined){
                finalParams.data.inputParameters.env = params.data.inputParameters.env;
            }
            if(params.data.inputParameters.pool!= undefined) {
                finalParams.data.inputParameters.pool = params.data.inputParameters.pool;
            }
            if(params.data.inputParameters.machine!= undefined){
                finalParams.data.inputParameters.machine = params.data.inputParameters.machine;
            }
            if(params.data.inputParameters.colo!= undefined){
                finalParams.data.inputParameters.colo = params.data.inputParameters.colo;
            }
            if(params.data.inputParameters.sampling!= undefined){
                finalParams.data.inputParameters.sampling = params.data.inputParameters.sampling;
            }
            return finalParams;


        }else{
            log('input undefined');
        }
    }
    return finalParams;
}

function log(msg){
    logger.info(msg);
}

module.exports.start = start;
module.exports.startAll = startAll;
module.exports.log = log;