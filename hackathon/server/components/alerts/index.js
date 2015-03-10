'use strict';

var eventsdb=require('../eventsdb');
var CronJob = require('cron').CronJob;
var mailer = require('../mailer');
var alertdef=require('../alertdef/alertdef');

module.exports.start=function() {

	//console.log("starting monitoring for alerts");
	// scheduler

	var job = new CronJob('0 */5 * * * *',
		function(){
//            console.log("hello");
            alertdef.getAllAlertDefinitions().then(function(result){
                for(var i=0;i<result.length;i++) {
                    var alert=result[i];
                    alert.shouldAlert().then(function(result){
                        if(result[0]) {
                            alert.sendEmail(result).then(function(result){
                                console.log(result);
                            },function(err){
                                console.log(err);
                            })
                        }
                    });
                }
            });
        },
        null,
		true,
		"America/Los_Angeles");
	job.start();

};

