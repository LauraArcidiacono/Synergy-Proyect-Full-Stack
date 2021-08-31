const Resource = require('../models/resourceModel');

async function getAllResources({ query }, res) {
  try {
    const resources = await Resource.find(query);
    res.json(resources);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOneResource({ body }, res) {
  try {
    const newResource = await Resource.create(body);
    res.json(newResource);
  } catch (error) {
    res.status(500);
    res.send('The resource hasn´t been created');
  }
}

async function getOneResourceById({ params: { resourceId } }, res) {
  try {
    const foundResource = await Resource.findById(resourceId);

    res.json(foundResource);
    res.send(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneResourceById(req, res) {
  const { resourceId } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedResource = await Resource.findByIdAndUpdate(
      resourceId,
      dataToUpdate,
      { new: true }
    );
    res.json(updatedResource);
  } catch (error) {
    res.status(500);
    res.send('The resource hasn´t been updated');
  }
}

async function deleteOneResourceById(req, res) {
  const { resourceId } = req.params;
  try {
    await Resource.findByIdAndDelete(resourceId);
    res.json('The resource has been deleted');
  } catch (error) {
    res.status(500);
    res.send('The resource hasn´t been deleted');
  }
}

module.exports = {
  getAllResources,
  createOneResource,
  getOneResourceById,
  updateOneResourceById,
  deleteOneResourceById
};
