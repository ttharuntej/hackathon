'use strict';
var q=require('q');
var connectionpool=null;

exports.setConnectionPool=function(cp) {
	connectionpool=cp;
}

exports.getConnectionPool=function() {
	return connectionpool;
}

exports.insertEvent=function(date,module,usecase,value,dimension1,dimension2,dimension3,details,startDate,endDate,dimension4) {
	var deffered=q.defer();
	var params={EVENT_DATE:date,
        MODULE:module,
        USECASE:usecase,
        VALUE:value,
        DIMENSION1:dimension1,
        DIMENSION2:dimension2,
        DIMENSION3:dimension3,
        DETAILS:details,
        START_DATE:startDate,
        END_DATE:endDate,
        DIMENSION4:dimension4
    };

	connectionpool.query('INSERT INTO EVENTS SET ?',params,function(err,result){
		if(err) {
			deffered.reject(err);
            console.log(err);
		} else {
			deffered.resolve(result);
//            console.log(result);

        }
	});
	return deffered.promise;
}

exports.getDistinctModules=function() {
	var deffered=q.defer();
	connectionpool.query('SELECT distinct module FROM EVENTS',function(err,result){
		if(err) {
			deffered.reject(err);
		} else {
			deffered.resolve(result);
		}
	});
	return deffered.promise;
}

exports.getDistinctUsecases=function() {
	var deffered=q.defer();
	connectionpool.query('SELECT distinct usecase FROM EVENTS',function(err,result){
		if(err) {
			deffered.reject(err);
		} else {
			deffered.resolve(result);
		}
	});
	return deffered.promise;
}

exports.getDistinctDimension1=function() {
	var deffered=q.defer();
	connectionpool.query('SELECT distinct dimension1 FROM EVENTS',function(err,result){
		if(err) {
			deffered.reject(err);

		} else {
			deffered.resolve(result);
		}
	});
	return deffered.promise;
}

exports.getDistinctDimension2=function() {
	var deffered=q.defer();
	connectionpool.query('SELECT distinct dimension2 FROM EVENTS',function(err,result){
		if(err) {
			deffered.reject(err);
		} else {
			deffered.resolve(result);
		}
	});
	return deffered.promise;
}

exports.getDistinctDimension3=function() {
	var deffered=q.defer();
	connectionpool.query('SELECT distinct dimension3 FROM EVENTS',function(err,result){
		if(err) {
			deffered.reject(err);
		} else {
			deffered.resolve(result);
		}
	});
	return deffered.promise;
}

exports.executeQuery=function(sql,bindparams) {
	var defered=q.defer();
	connectionpool.query(sql,bindparams,function(err,result){
		if(err) {
			console.log("ERROR"+err)
			defered.reject(err);
		} else {
			defered.resolve(result);
		}
	});
	return defered.promise;
}
