var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin.controller');

router.get('/',controller.index);
router.post('/add',controller.doCreate);

module.exports = router;