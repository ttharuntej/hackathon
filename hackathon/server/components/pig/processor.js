/**
 * Created by xwang17 on 10/21/14.
 */

var utils = require('./utils');
function comsDataCallBack (data, params) { // 10 percent, most scripts except one(UnexpectedError)
    function cb(data, params){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var value = words[1];
            var errorclass = words[2];
            var errordetails= words[3];
            if(value !== undefined && value != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "COMSDATA", "Error", value, name, errorclass, errordetails, "",
                    utils.convertCalDateToDbDate(params.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.inputParameters.endDate),
                    "");
                // date,module,usecase,value,dimension1,dimension2,dimension3,details,startDate,endDate,dimension4
            }
        }
    }
    cb(data, params);
}

function comsData2CallBack (data, params) {// 100 percent, UnexpectedError
    function cb(data, params){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var errorclass = words[0];
            var value = words[1];
            var name = words[2];

            if(counts !== undefined && counts != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "COMSDATA", "Error", value, name, errorclass, "", "",
                    utils.convertCalDateToDbDate(params.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.inputParameters.endDate),
                    "");
                // date,module,usecase,value,dimension1,dimension2,dimension3,details,startDate,endDate,dimension4
            }
        }
    }
    cb(data, params);
}

function comsDataCallBack (data, params) { // 10 percent, most scripts except one(UnexpectedError)
    function cb(data, params){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var value = words[1];
            var errorclass = words[2];
            var errordetails= words[3];
            if(value !== undefined && value != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "COMSDATA", "Error", value, name, errorclass, errordetails, "",
                    utils.convertCalDateToDbDate(params.data.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.data.inputParameters.endDate),
                    "");
                // date,module,usecase,value,dimension1,dimension2,dimension3,details,startDate,endDate,dimension4
            }
        }
    }
    cb(data, params);
}

function comsData2CallBack (data, params) {// 100 percent, UnexpectedError
    function cb(data, params){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var errorclass = words[0];
            var value = words[1];
            var name = words[2];

            if(counts !== undefined && counts != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "COMSDATA", "Error", value, name, errorclass, "", "",
                    utils.convertCalDateToDbDate(params.data.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.data.inputParameters.endDate),
                    "");
                // date,module,usecase,value,dimension1,dimension2,dimension3,details,startDate,endDate,dimension4
            }
        }
    }
    cb(data, params);
}

function apiErrorCallBack (data, params) {
    function cb(data, params){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var siteId = words[1];
            var version = words[2];
            var appname = words[3];
            var counts = words[4];

            if(counts !== undefined && counts != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "TAPI", "CriticalError", counts, name, siteId, version, "",
                    utils.convertCalDateToDbDate(params.data.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.data.inputParameters.endDate),
                appname);

            }
        }
    }
    cb(data, params);
}
function apiTimeoutCallBack (data, params) {
    function cb(data, params){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var siteId = words[1];
            var version = words[2];
            var appname = words[3];
            var counts = words[4];
            if(counts !== undefined && counts != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "TAPI", "Timeout", counts, name, siteId, version, "",
                    utils.convertCalDateToDbDate(params.data.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.data.inputParameters.endDate),
                appname);
            }
        }
    }
    cb(data, params);
}

function apiRCSErrorCountCallBack (data, params) {
    function cb(data, params){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var siteId = words[1];
            var errorcode = words[2];
            var updateType= words[3];
            var counts = words[4];
            if(counts !== undefined && counts != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "TAPI", "RCSError", counts, name, siteId, errorcode, "",
                    utils.convertCalDateToDbDate(params.data.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.data.inputParameters.endDate),
                    updateType);
                // date,module,usecase,value,dimension1,dimension2,dimension3,details,startDate,endDate,dimension4

            }
        }
    }
    cb(data, params);
}

function apiRCSErrorCountCallBack (data, params) {
    function cb(data, params){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var siteId = words[1];
            var errorcode = words[2];
            var updateType= words[3];
            var counts = words[4];
            if(counts !== undefined && counts != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "TAPI", "RCSError", counts, name, siteId, errorcode, "",
                    utils.convertCalDateToDbDate(params.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.inputParameters.endDate),
                    updateType);
                // date,module,usecase,value,dimension1,dimension2,dimension3,details,startDate,endDate,dimension4
            }
        }
    }
    cb(data, params);
}

function cosmosLongUrl3SecCallBack (data, params) {

    console.log(data);

    function writeIntoDB(data, params){
        var rows = data.split('\n');
        var i = 0;
        for (i; i<rows.length; i++) {
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var counts = words[1];
            if(counts !== undefined && counts != ""){
                var eventsdb=require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "COSMOS", "LongUrl3Sec",counts, name, "", "", "",
                    utils.convertCalDateToDbDate(params.data.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.data.inputParameters.endDate));
            }
        }
    }
    writeIntoDB(data, params)
}

function cosmosLongUrl4SecCallBack (data, params) {

    console.log(data);

    function writeIntoDB(data, params){
        var rows = data.split('\n');
        var i = 0;
        for (i; i<rows.length; i++) {
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var counts = words[1];
            if(counts !== undefined && counts != ""){
                var eventsdb=require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "COSMOS", "LongUrl4Sec",counts, name, "", "", "",
                    utils.convertCalDateToDbDate(params.data.inputParameters.startDate),
                    utils.convertCalDateToDbDate(params.data.inputParameters.endDate));
            }
        }
    }
    writeIntoDB(data, params)
}

function writeIntoFileCallBack (data, params) {
    var fs = require('fs');
    var crypto = require('crypto');
    var date = new Date();

    var filename = "regression" + date.getTime().toString()
        + "_" + crypto.createHash('md5').update(date.getTime().toString()).digest("hex") + "_" + "file1";

    fs.writeFile("./server/public/tmp/"+filename+".json", JSON.stringify(data), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File " + filename + ".json" + " has been saved to " + "public/tmp");
        }
    })
}

module.exports.cosmosLongUrl3SecCallBack = cosmosLongUrl3SecCallBack;
module.exports.cosmosLongUrl4SecCallBack = cosmosLongUrl4SecCallBack;
module.exports.apiErrorCallBack = apiErrorCallBack;
module.exports.apiTimeoutCallBack = apiTimeoutCallBack;
module.exports.apiRCSErrorCountCallBack = apiRCSErrorCountCallBack;
module.exports.comsDataCallBack = comsDataCallBack;
module.exports.comsData2CallBack = comsData2CallBack;
