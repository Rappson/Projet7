const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const postController = require('../controllers/post')

router.post('/newPost', auth, postController.createNewPost);
router.get('/getPost', postController.getAllPosts);


module.exports = router