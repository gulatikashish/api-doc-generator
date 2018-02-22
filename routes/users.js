const express = require('express')
const router = express.Router()
const user = require('../schema/users') // get our mongoose model
const controller = require('../controller/userController')
const is = require('is')
const api = require('express-api-docs')
api.generate('app.js', 'public/api.html')
router
  .route('/')
  /**
   * Get all the registered users
   * @section users
   * @type get
   * @url /users
   */
  .get(controller.GET_USERS)
  /**
   * Update a user
   *
   * @section users
   * @type post
   * @url /users/:id
   * @param {string} id
   * @param {string =} name
   * @param {string =} email_id
   */
  .post(controller.ADD_USER)

router
  .route('/:id')
  /**
   * get the deatils of the particular user
   *
   * @section users
   * @type get
   * @url /users/:id
   * @param {string} id
   */
  .get(controller.GET_USER)
  /**
   * Create a user
   *
   * @section users
   * @type put
   * @url /users/:id
   * @param {string} id
   * @param {string =} name
   * @param {string =} email_id
   */
  .put(controller.UPDATE_USER)
  /**
   * Create a user
   *
   * @section users
   * @type delete
   * @param {string} id
   * @url /users/:id
   */
  .delete(controller.DELETE_USER)

module.exports = router
