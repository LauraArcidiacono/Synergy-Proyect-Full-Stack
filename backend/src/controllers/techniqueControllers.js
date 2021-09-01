const Technique = require('../models/techniqueModel');

async function getAllTechniques({ query }, res) {
  try {
    const techniques = await Technique.find(query)
      .populate({
        path: 'reviews',
        select: ['user'],
        populate: {
          path: 'user',
          model: 'User'
        }
      });
    // const userPopulated = await Technique.find(query).reviews.populate('user');
    // techniques = { techniques, reviews: userPopulated };
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
        path: 'reviews'
      });

    res.json(foundTechnique);
    res.send(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

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
  updateOneTechniqueById,
  deleteOneTechniqueById
};
