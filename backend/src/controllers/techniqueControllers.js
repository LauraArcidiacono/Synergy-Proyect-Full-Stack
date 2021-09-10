const Technique = require('../models/techniqueModel');

async function getAllTechniques({ query }, res) {
  try {
    const techniques = await Technique.find(query)
      .populate({
        path: 'reviews',
        populate: {
          path: 'user'
        }
      }).populate({
        path: 'reviews',
        populate: {
          path: 'technique'
        }
      });
    res.json(techniques);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function createOneTechnique({ body }, res) {
  try {
    const newTechnique = await Technique.create(body);
    res.json(newTechnique);
  } catch (error) {
    res.status(500);
    res.send('The Technique hasn´t been created');
  }
}

async function getOneTechniqueById({ params: { techniqueId } }, res) {
  try {
    const foundTechnique = await Technique.findById(techniqueId)
      .populate({
        path: 'reviews',
        select: ['user', 'description', 'score'],
        populate: {
          path: 'user',
          model: 'User'
        }
      });

    res.json(foundTechnique);
    res.send(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getTechniquesByUserProviderId(req, res) {
  const { userProviderId } = req.params;
  try {
    const foundTechniques = await Technique.find({ userProvider: { $eq: userProviderId } })
      .populate({
        path: 'reviews',
        select: ['user', 'description', 'score'],
        populate: {
          path: 'user',
          model: 'User'
        }
      });
    res.json(foundTechniques);
    res.send(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

///
async function getTechniquesByUserReviewrId(req, res) {
  const { userReviewrId } = req.params;
  try {
    const foundTechniqueReview = await Technique
      .find({ reviews: { user: { _id: { $eq: userReviewrId } } } })
      .populate('reviews');
    res.json(foundTechniqueReview);
    res.send(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
///
async function updateOneTechniqueById(req, res) {
  const { techniqueId } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedTechnique = await Technique.findByIdAndUpdate(
      techniqueId,
      dataToUpdate,
      { new: true }
    );
    res.json(updatedTechnique);
  } catch (error) {
    res.status(500);
    res.send('The Technique hasn´t been updated');
  }
}

async function deleteOneTechniqueById(req, res) {
  const { techniqueId } = req.params;
  try {
    await Technique.findByIdAndDelete(techniqueId);
    res.json('The Technique has been deleted');
  } catch (error) {
    res.status(500);
    res.send('The Technique hasn´t been deleted');
  }
}

module.exports = {
  getAllTechniques,
  createOneTechnique,
  getOneTechniqueById,
  getTechniquesByUserProviderId,
  updateOneTechniqueById,
  getTechniquesByUserReviewrId,
  deleteOneTechniqueById
};
