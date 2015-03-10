'use strict';

var eventsdb=require('../../components/eventsdb');

exports.distinctmodules = function(req, res) {
	eventsdb.getDistinctModules().then(function(modules){
		return res.json(200,modules);
	},function(err) {
		return res.send(500, err);
	});
};

exports.distinctusecases = function(req, res) {
	eventsdb.getDistinctUsecases().then(function(modules){
		return res.json(200,modules);
	},function(err) {
		return res.send(500, err);
	});
};

exports.distinctdimension1 = function(req, res) {
	eventsdb.getDistinctDimension1().then(function(modules){
		return res.json(200,modules);
	},function(err) {
		return res.send(500, err);
	});
};

exports.distinctdimension2 = function(req, res) {
	eventsdb.getDistinctDimension2().then(function(modules){
		return res.json(200,modules);
	},function(err) {
		return res.send(500, err);
	});
};

exports.distinctdimension3 = function(req, res) {
	eventsdb.getDistinctDimension3().then(function(modules){
		return res.json(200,modules);
	},function(err) {
		return res.send(500, err);
	});
};

