import Router from 'express';
import {CreatePost, deletePost, getAllPosts, likePost} from '../controllers/postController.js';

const postRouter=Router();

postRouter.route('/').post(CreatePost);
postRouter.route('/').get(getAllPosts);
postRouter.route('/:id/like').put(likePost);
postRouter.route('/:id').delete(deletePost);

export default postRouter;