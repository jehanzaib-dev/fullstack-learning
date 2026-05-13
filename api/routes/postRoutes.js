import Router from 'express';
import {CreatePost, getPosts} from '../controllers/postController.js';

const postRouter=Router();

postRouter.route('/').post(CreatePost);
postRouter.route('/').get(getPosts);

export default postRouter;