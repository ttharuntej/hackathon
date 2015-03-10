var q=require('q');

var AlertDef=require('./alertdef.model.js');
module.exports.AlertDef=AlertDef;

exports.getAllAlertDefinitions=function() {
	var defered=q.defer();
	AlertDef.find(function (err,alertdefs){
		if(err) {
			defered.reject(err);
		} else {
			defered.resolve(alertdefs);
		}
	});
	return defered.promise;
};

exports.updateAlertDefinitionById=function(id,updatefields) {
	var defered=q.defer();
	AlertDef.update({'_id':id},updatefields,function(err,numberaffected){
		if(err) {
			defered.reject(err);
		} else {
			defered.resolve(numberaffected);
		}
	});
	return defered.promise;
};

exports.insertAlertDef=function(alertdef){
	var defered=q.defer();
	var newAlert=new AlertDef(alertdef);
	newAlert.save(function(err){
		if(err) {
			defered.reject(err);
		} else {
			defered.resolve();
		}
	});
	return defered.promise;
};

exports.deleteAlertDef=function(id) {
	var defered=q.defer();
	AlertDef.remove({_id:id},function(err){
		if(err) {
			defered.reject(err);
		} else {
			defered.resolve();
		}
	});
	return defered.promise;
}