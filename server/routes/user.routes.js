import express from 'express';
import UserController from '../controllers/user.controller';

const { createAUser } = UserController;
const route = express.Router();

route.post('/user', createAUser);

export default route;
