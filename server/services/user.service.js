import models from '../database/models/index';

const { User } = models;

/**
 * @description User services
 */
export default class UserService {
  /**
     * @description save user
     * @param {object} user
     * @returns {object} user
     */
  static async saveUser(user) {
    const newUser = await User.create(user);
    return newUser;
  }
}
