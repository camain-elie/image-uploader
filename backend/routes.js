const express = require('express');
const router = express.Router();

const controller = require('./controller');
const multer = require('./multer-config');

router.post('/', multer, controller.postImage);

router.get('/', controller.getImage);

module.exports = router;