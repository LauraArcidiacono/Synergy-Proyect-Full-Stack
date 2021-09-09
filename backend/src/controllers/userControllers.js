/* eslint-disable no-underscore-dangle */
const User = require('../models/userModel');

async function getAllUsers({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOneUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send('The user hasn´t been created');
  }
}

async function getOneUserById({ params: { userId } }, res) {
  try {
    const foundUser = await User.findById(userId)
      .populate({
        path: 'favoriteTechniques',
        select: ['name', 'ilustration']
      })
      .populate({
        path: 'techniquesProvided',
        select: ['name', 'ilustration']
      });

    res.json(foundUser);
    res.status(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneUserById(req, res) {
  const { userId } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send('The user hasn´t been updated');
  }
}

async function addFavoriteTechniqueToUser(req, res) {
  const { userId } = req.params;
  const techniqueToAdd = req.body;
  try {
    const addedTechnique = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { favoriteTechniques: techniqueToAdd._id } },
      { new: true }
    );
    res.json(addedTechnique);
  } catch (error) {
    res.status(500);
    res.send('The technique hasn´t been added');
  }
}

async function deleteOneUserById(req, res) {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.json('The user has been deleted');
  } catch (error) {
    res.status(500);
    res.send('The user hasn´t been deleted');
  }
}

module.exports = {
  getAllUsers,
  createOneUser,
  getOneUserById,
  updateOneUserById,
  addFavoriteTechniqueToUser,
  deleteOneUserById
};
