'use strict';

var alertdefds=require('../../components/alertdef/alertdef');

exports.index = function(req, res) {
	alertdefds.getAllAlertDefinitions().then(function(alerts){
		return res.json(200,alerts);
	},function(err) {
		return res.send(500, err);
	});
};

exports.create = function(req, res) {
	alertdefds.insertAlertDef(req.body).then(function(){
		return res.json(201)
	},function(err){
		return res.send(500, err);
	});
};

exports.update = function(req, res) {
  alertdefds.updateAlertDefinitionById(req.params.id,req.body).then(function(numberAffected){
  	return res.json(200,numberAffected);
  },function(err){
	return res.send(500, err);
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
 	alertdefds.deleteAlertDef(req.params.id).then(function(){
	  	return res.json(200);
	  },function(err){
		return res.send(500, err);
	  });
};