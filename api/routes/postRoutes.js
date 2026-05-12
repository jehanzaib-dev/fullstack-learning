import Router from 'express';
import {CreatePost} from '../controllers/postController.js';

const postRouter=Router();

postRouter.route('/').post(CreatePost);

export default postRouter;