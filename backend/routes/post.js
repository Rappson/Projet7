const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const postController = require('../controllers/post')

router.post('/newPost', auth, postController.createNewPost);
router.get('/getPost', auth, postController.getAllPosts);
router.get('/getOnePost/:id', auth, postController.getOnePost);
router.delete('/deletePost/:id', auth, postController.deletePost)
router.get('/getComments/:id', postController.getAllComments)
router.post('/newLike', auth, postController.likes)
router.post('/newComment', auth, postController.createNewComment);

module.exports = router