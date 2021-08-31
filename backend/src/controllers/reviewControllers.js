const Review = require('../models/reviewModel');

async function getAllReviews({ query }, res) {
  try {
    const reviews = await Review.find(query);
    res.json(reviews);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOneReview({ body }, res) {
  try {
    const newReview = await Review.create(body);
    res.json(newReview);
  } catch (error) {
    res.status(500);
    res.send('The review hasn´t been created');
  }
}

async function getOneReviewById({ params: { reviewId } }, res) {
  try {
    const foundReview = await Review.findById(reviewId)
      .populate({
        path: 'technique'
      })
      .populate({
        path: 'user'
      });

    res.json(foundReview);
    res.send(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneReviewById(req, res) {
  const { reviewId } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      dataToUpdate,
      { new: true }
    );
    res.json(updatedReview);
  } catch (error) {
    res.status(500);
    res.send('The Review hasn´t been updated');
  }
}

async function deleteOneReviewById(req, res) {
  const { reviewId } = req.params;
  try {
    await Review.findByIdAndDelete(reviewId);
    res.json('The Review has been deleted');
  } catch (error) {
    res.send('The Review hasn´t been deleted');
    res.status(500);
  }
}

module.exports = {
  getAllReviews,
  createOneReview,
  getOneReviewById,
  updateOneReviewById,
  deleteOneReviewById
};
