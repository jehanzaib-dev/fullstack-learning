import Router from 'express';
import {CreatePost, getAllPosts} from '../controllers/postController.js';

const postRouter=Router();

postRouter.route('/').post(CreatePost);
postRouter.route('/').get(getAllPosts);

export default postRouter;