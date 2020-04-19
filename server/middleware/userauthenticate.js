const jwt = require('jsonwebtoken');
const config = require('../config/config');
const validationErrors = require('../helpers/validationErrors');

const { secretKey } = config;

/**
 * @class Authenticate User
 */
class UserAuthentication {
  /**
     * Authenticate users
     *
     * @param {Object} request
     * @param {Object} response
     *
     * @param {callback} next
     *
     * @return {Object}
     */
  static authenticateUser(request, response, next) {
    try {
      const userToken = request.headers['x-access'] || request.headers.token;
      const verifiedToken = jwt.verify(userToken, secretKey);
      request.token = verifiedToken;
      return next();
    } catch (error) {
      return response.status(401).json({
        status: 401,
        success: false,
        error: validationErrors.notAuthenticated,
      });
    }
  }

  /**
     * check Admin role
     * @param {Object} request
     * @param {Object} response
     * @param {Function} next
     * @return {Object}
     */
  static authenticateAdmin(request, response, next) {
    try {
      const token = request.headers['x-access'] || request.headers.token || request.query.token;
      const verifiedToken = jwt.verify(token, secretKey);
      request.token = verifiedToken;
      if (verifiedToken.user.role !== 1) {
        return response.status(403).json({
          status: 403,
          error: validationErrors.notAllowed,
          success: false,
        });
      } return next();
    } catch (error) {
      return response.status(401).json({
        status: '401',
        error: validationErrors.notAuthenticated,
        success: false,
      });
    }
  }
}

module.exports = UserAuthentication;
