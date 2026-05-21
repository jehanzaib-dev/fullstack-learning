import {Router} from 'express';
import {getAllUsers, followUser, unfollowUser} from '../controllers/userController.js';

const UserRouter=Router();

UserRouter.route('/').get(getAllUsers);
UserRouter.route('/:id/follow').put(followUser);
UserRouter.route('/:id/unfollow').put(unfollowUser);

export default UserRouter;