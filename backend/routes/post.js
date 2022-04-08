const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const postController = require('../controllers/post')

router.post('/newPost', auth, postController.createNewPost);
router.get('/getPost', auth, postController.getAllPosts);
router.get('/getOnePost/:id', auth, postController.getOnePost);
router.post('/newLike', auth, postController.likes)


module.exports = router