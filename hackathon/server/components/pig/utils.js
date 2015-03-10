/**
 * Created by xwang17 on 10/20/14.
 */
var moment = require('moment');

function genEndDate(){
    // For todays date;
    Date.prototype.today = function () {
        return this.getFullYear() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ ((this.getDate() < 10)?"0":"") + this.getDate();
    }

    // For the time now
    Date.prototype.timeNow = function () {
        var hour = this.getHours()-1;
        if(hour < 0){
            hour = 23;
        }
        return ((hour < 10)?"0":"") + hour +":"+ "00";
    }

    var datetime = new Date().today() + "-" + new Date().timeNow();
    return datetime;
};


function genCurrDate(){
    return moment().format("YYYY/MM/DD-HH:mm");
};

function genStartDate(){
    // For todays date;
    Date.prototype.today = function () {
        return this.getFullYear() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ ((this.getDate() < 10)?"0":"") + this.getDate();
    }
// For the time now
    Date.prototype.timeNow = function () {
        var hour = this.getHours()-2;
        if(hour < 0){
            hour = 23;
        }
        return ((hour < 10)?"0":"") + hour +":"+ "00";
    }

    var datetime = new Date().today() + "-" + new Date().timeNow();
    return datetime;
};

function convertCalDateToDbDate(date){
    // input format: 2014/10/30-13:00
    // output format: 2014-10-31 09:39:21

    var dateAndTime = date.split('-');
    var date = dateAndTime[0].split('/');
    var time = dateAndTime[1].split(':');

    var outputDate = date.join('-') + " " + time.join(':') + ":00";
    return outputDate;
}

function getMinutesBeforeNow(mins){
    var ms = moment().valueOf() - mins*60*1000;
    return moment(ms).format("YYYY/MM/DD-HH:mm");
}

module.exports.genStartDate = genStartDate;
module.exports.genEndDate = genEndDate;
module.exports.genCurrDate = genCurrDate;
module.exports.getMinutesBeforeNow = getMinutesBeforeNow;
module.exports.convertCalDateToDbDate = convertCalDateToDbDate;
