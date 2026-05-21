import {Router} from 'express';
import {getAllUsers} from '../controllers/userController.js';

const UserRouter=Router();

UserRouter.route('/').get(getAllUsers);

export default UserRouter;