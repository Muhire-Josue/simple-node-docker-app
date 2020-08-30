import UserService from '../services/user.service';
import customMessage from '../utils/customMessage';
import statusCode from '../utils/statusCodes';
import responseHandler from '../utils/responseHandler.util';

const { createUser } = customMessage;
const { ok } = statusCode;
const { saveUser } = UserService;
const { successResponse } = responseHandler;

/**
 * @description User controller
 */
export default class UserController {
/**
 * @description user controller
 * @param {request} req
 * @param {response} res
 * @returns {object} it returns the newly created user
 */
  static async createAUser(req, res) {
    const user = req.body;
    const newUser = await saveUser(user);
    return successResponse(res, ok, createUser, undefined, newUser);
  }
}
