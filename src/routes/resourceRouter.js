const { Router } = require('express');
const {
  getAllResources,
  createOneResource,
  getOneResourceById,
  updateOneResourceById,
  deleteOneResourceById
} = require('../controllers/resourceControllers');

const resourceRouter = new Router();

resourceRouter
  .route('/')
  .get(getAllResources)
  .post(createOneResource);

resourceRouter
  .route('/:resourceId')
  .get(getOneResourceById)
  .put(updateOneResourceById)
  .delete(deleteOneResourceById);

module.exports = resourceRouter;
