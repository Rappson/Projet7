const express = require('express');
const router = express.Router();

const postController = require('../controllers/post')

router.post('/newPost', postController.createNewPost);


module.exports = router