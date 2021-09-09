const { Router } = require('express');
const {
  getAllUsers,
  createOneUser,
  getOneUserById,
  updateOneUserById,
  addFavoriteTechniqueToUser,
  deleteOneUserById
} = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/favoriteTechniques/:userId')
  .put(addFavoriteTechniqueToUser);

userRouter
  .route('/:userId')
  .get(getOneUserById)
  .put(updateOneUserById)
  .delete(deleteOneUserById);
userRouter
  .route('/')
  .get(getAllUsers)
  .post(createOneUser);

module.exports = userRouter;
