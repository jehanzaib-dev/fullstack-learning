import {Router} from 'express';
import {getAllUsers, followUser, unfollowUser, getUserByUsername} from '../controllers/userController.js';

const UserRouter=Router();

UserRouter.route('/').get(getAllUsers);
UserRouter.route('/:username').get(getUserByUsername);
UserRouter.route('/:id/follow').put(followUser);
UserRouter.route('/:id/unfollow').put(unfollowUser);

export default UserRouter;