import connection from '../helpers/conn';
import validationErrors from '../helpers/validationErrors';

const client = connection();
client.connect();
/**
 *    @fileOverview Class to manage Meal functions
 *    @class MealsController
 *    @exports MealsController
 *    @requires /..helpers/conn
 */
class MealsController {
  /**
   *  add a meal
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   *
   */
  static addMeal(request, response) {
    const {
      name,
      description,
      price,
      picture,
    } = request.body;

    const userId = request.token.user.id;

    const query = {
      text: 'INSERT INTO meals(name, description, price, picture, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      values: [name, description, price, picture, userId],
    };
    MealsController.runAddMealQuery(response, query);
  }

  /**
   *  Run user signup query
   *  @param {Object} request
   *  @param {Object} response
   * @param {String} query
   *  @return {Object} json
   *
   */
  static runAddMealQuery(response, query) {
    client.query(query)
      .then(dbResult => MealsController.mealsSuccess(response, dbResult))
      .catch((error) => {
        response.status(406).send({
          status: 406,
          success: false,
          error: validationErrors.mealExists,
          dbError: error.stack,
        });
      });
  }

  /**
   *  Return meal success response
   *  @param {Object} response
   *  @param {Object} dbResult
   *  @return {Object} json
   *
   */
  static mealsSuccess(response, dbResult) {
    return response.status(201).json({
      status: 201,
      message: 'Meal added successfully',
      success: true,
      newMeal: dbResult.rows[0],
    });
  }

  /**
   *  Get menu
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static getMenu(request, response) {
    const query = 'SELECT * from meals';

    client.query(query)
      .then((dbResult) => {
        if (!dbResult.rows[0]) {
          return response.status(404).json({
            statusCode: 404,
            success: false,
            error: validationErrors.noMenu,
          });
        }
        return MealsController.menuSuccess(response, dbResult);
      })
      .catch((error) => { response.status(500).send(error); });
  }

  /**
   *  Get meal by id
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static getMealById(request, response) {
    const { mealId } = request.params;
    const query = `SELECT * from meals WHERE id=${mealId}`;
    client.query(query)
      .then((dbResult) => {
        if (!dbResult.rows[0]) {
          return response.status(404).json({
            status: 404,
            success: false,
            error: validationErrors.noMeal,
          });
        }
        return MealsController.oneMealSuccess(response, dbResult);
      })
      .catch((error) => { response.status(500).send(error); });
  }

  /**
   *  edit a meal
   *  @param {Object} request
   *  @param {Object} response
   *
   *
   *  @return {Object} json
   */

  static editMeal(request, response) {
    const { mealId } = request.params;
    const { name, description, price } = request.body;
    const query = `UPDATE meals set name = '${name}', description = '${description}', price = ${price} WHERE id=${mealId} RETURNING *`;

    client.query(query)
      .then((dbResult) => {
        if (!dbResult.rows[0]) {
          return response.status(404).json({
            status: 404,
            success: false,
            error: validationErrors.noMeal,
          });
        }
        return MealsController.editMealSuccess(response, dbResult);
      })
      .catch(error => MealsController.duplicateEditMeal(response, error));
  }

  /**
   *  Delete meal by id
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static deleteMeal(request, response) {
    const { mealId } = request.params;
    const query = `DELETE from meals WHERE id=${mealId}`;
    client.query(query)
      .then((dbResult) => {
        if (!dbResult.rowCount) {
          return response.status(404).json({
            status: 404,
            success: false,
            error: validationErrors.noMeal,
          });
        }
        return MealsController.deleteMealSuccess(response);
      })
      .catch((error) => { response.status(500).send(error); });
  }

  /**
   *  Return menu success response
   *  @param {Object} response
   *  @param {Object} dbResult
   *  @return {Object} json
   *
   */
  static menuSuccess(response, dbResult) {
    return response.status(200).json({
      status: 200,
      message: 'Menu gotten successfuly',
      success: true,
      menu: dbResult.rows,
    });
  }

  /**
   *  Return one meal success response
   *  @param {Object} response
   *  @param {Object} dbResult
   *  @return {Object} json
   *
   */
  static oneMealSuccess(response, dbResult) {
    return response.status(200).json({
      status: 200,
      success: true,
      message: 'Successfully got meal',
      meal: dbResult.rows[0],
    });
  }

  /**
   *  Return edit meal success response
   *  @param {Object} response
   *  @param {Object} dbResult
   *  @return {Object} json
   *
   */
  static editMealSuccess(response, dbResult) {
    return response.status(202).json({
      status: 202,
      success: true,
      message: 'Meal updated successfully',
      meal: dbResult.rows[0],
    });
  }

  /**
   *  Return error for duplicate meal during edit
   *  @param {Object} response
   *  @param {Object} dbResult
   *  @return {Object} json
   *
   */
  static duplicateEditMeal(response, error) {
    return response.status(406).send({
      status: 406,
      success: false,
      error: validationErrors.duplicateEditMeal,
      dbError: error.stack,
    });
  }

  /**
   *  Return delete meal success response
   *  @param {Object} response
   *  @param {Object} dbResult
   *  @return {Object} json
   *
   */
  static deleteMealSuccess(response) {
    return response.status(202).json({
      status: 202,
      success: true,
      message: 'Meal deleted successfully',
    });
  }
}

export default MealsController;
