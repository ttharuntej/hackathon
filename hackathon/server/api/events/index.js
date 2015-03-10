'use strict';

var express = require('express');
var controller = require('./events.controller');

var router = express.Router();

router.get('/distinctmodules', controller.distinctmodules);
router.get('/distinctusecases', controller.distinctusecases);
router.get('/distinctdimension1', controller.distinctdimension1);
router.get('/distinctdimension2', controller.distinctdimension2);
router.get('/distinctdimension3', controller.distinctdimension3);

module.exports = router;