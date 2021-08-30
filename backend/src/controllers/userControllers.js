const User = require('../models/userModel');

async function getAll({query}, res) {
    try {
        const users = await User.find(query); 
        res.json(users);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function createOne({ body }, res) {
    try {
        const newUser = await User.create(body);
        res.json(newUser);
    } catch (error) {
        res.status(500);
        res.send('The user hasn´t been created');
    }
}

async function getById({ params: { userId } }, res) {
    try {
        const foundUser = await User.findById(userId)
        res.json(foundUser);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function updateOneById(req, res) {
    const { userId } = req.params;
    const dataToUpdate = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            dataToUpdate,
            { new: true}
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(500);
        res.send('The user hasn´t been updated');
    }
}

async function deleteOneById(req, res) {
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
    getAll,
    createOne,
    getById,
    updateOneById,
    deleteOneById
};