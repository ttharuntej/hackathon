/**
 * Created by xwang17 on 11/2/14.
 */
var pig = require('./server/components/pig/pigActionHelper');
var getschedule = require('./server/components/pig/pigScheduler');
var pigParams = require('./server/components/pig/pigParams');
var utils = require('./server/components/pig/utils');
var cbs = require('./server/components/pig/processor');


//schedule
function log(data){
    console.log(data);
};

//cb(utils.getMinutesBeforeNow(30 + pigParams.cosmosTestPig.range));

//var scheduler = getschedule.getScheduler("longUrl3Sec", "0 */1 * * * *", pigParams.cosmosTestPig, log);
//scheduler.runPeriod();

var scheduler = getschedule.getScheduler("ComsDataLookupSyncError", "0 */5 * * * *", pigParams.comsDataAllPig, log);
scheduler.runPeriod();

function log(msg){
    console.log(msg);
}

