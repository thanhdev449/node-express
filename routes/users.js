var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller');
/* GET users listing. */
router.get('/', controller.index);
router.get('/add', controller.create);
router.post('/postAdd', controller.postCreate);
router.post('/edit', controller.edit);
router.post('/postEdit', controller.postEdit);
router.post('/delete', controller.delete);

module.exports = router;
