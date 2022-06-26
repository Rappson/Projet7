const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const postController = require('../controllers/post')

router.post('/newPost', auth, postController.createNewPost);
router.post('/newLike', auth, postController.likes);
router.post('/newComment', auth, postController.createNewComment);
router.get('/getPost', auth, postController.getAllPosts);
router.get('/getOnePost/:id', auth, postController.getOnePost);
router.get('/getComments/:id', auth, postController.getAllComments);
router.put('/updatePost/:id', auth, postController.updatePost);
router.delete('/deletePost/:id', auth, postController.deletePost);
router.delete('/deleteComment/:id', postController.deleteComment);

module.exports = router