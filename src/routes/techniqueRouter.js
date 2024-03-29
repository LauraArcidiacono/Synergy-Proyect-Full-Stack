const { Router } = require('express');
const {
  getAllTechniques,
  createOneTechnique,
  getOneTechniqueById,
  getTechniquesByUserProviderId,
  updateOneTechniqueById,
  deleteOneTechniqueById
} = require('../controllers/techniqueControllers');

const techniqueRouter = new Router();

techniqueRouter
  .route('/userprovider/:userProviderId')
  .get(getTechniquesByUserProviderId);

techniqueRouter
  .route('/:techniqueId')
  .get(getOneTechniqueById)
  .put(updateOneTechniqueById)
  .delete(deleteOneTechniqueById);

techniqueRouter
  .route('/')
  .get(getAllTechniques)
  .post(createOneTechnique);
module.exports = techniqueRouter;
