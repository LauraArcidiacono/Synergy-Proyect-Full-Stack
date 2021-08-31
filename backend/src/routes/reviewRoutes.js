const { Router } = require('express');
const {
  getAllReviews,
  createOneReview,
  getOneReviewById,
  updateOneReviewById,
  deleteOneReviewById
} = require('../controllers/reviewControllers');

const reviewRouter = new Router();

reviewRouter
  .route('/')
  .get(getAllReviews)
  .post(createOneReview);

reviewRouter
  .route('/:reviewId')
  .get(getOneReviewById)
  .put(updateOneReviewById)
  .delete(deleteOneReviewById);

module.exports = reviewRouter;
