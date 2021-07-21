const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/', controller.postImage);

router.get('/', controller.getImage);

module.exports = router;