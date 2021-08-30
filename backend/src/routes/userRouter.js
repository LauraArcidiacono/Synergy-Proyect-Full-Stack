const { Router } = require('express');
const {
  getAllUsers,
  createOneUser,
  getOneUserById,
  updateOneUserById,
  deleteOneUserById
} = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .get(getAllUsers)
  .post(createOneUser);

userRouter
  .route('/:userId')
  .get(getOneUserById)
  .put(updateOneUserById)
  .delete(deleteOneUserById);

module.exports = userRouter;
