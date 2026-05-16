import Router from 'express';
import {CreatePost, getAllPosts, likePost} from '../controllers/postController.js';

const postRouter=Router();

postRouter.route('/').post(CreatePost);
postRouter.route('/').get(getAllPosts);
postRouter.route('/:id/like').put(likePost);

export default postRouter;