const Technique = require('../models/techniqueModel');
const controllers = require('./techniqueControllers');

jest.mock('../models/techniqueModel');

describe('TechniqueControllers', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
  });
  describe('Given a getAllTechniques function', () => {
    describe('When is triggered', () => {
      describe('And find resolved', () => {
        test('Then call json', async () => {
          req = {
            query: jest.fn()
          };

          Technique.find.mockReturnValue({
            populate: jest.fn().mockResolvedValue({})
          });

          await controllers.getAllTechniques(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And find rejects', () => {
        test('Then call status 500', async () => {
          req = {
            query: jest.fn()
          };

          Technique.find.mockReturnValue({
            populate: jest.fn().mockRejectedValue({})
          });

          await controllers.getAllTechniques(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a createOneTechnique function', () => {
    describe('When is triggeres', () => {
      describe('And create resolved', () => {
        test('Then call json', async () => {
          req = {
            body: {}
          };
          Technique.create.mockResolvedValue({});

          await controllers.createOneTechnique(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And create rejected', () => {
        test('Then call status with 500', async () => {
          req = {
            body: {}
          };
          Technique.create.mockRejectedValue();

          await controllers.createOneTechnique(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getOneTechniqueById function', () => {
    beforeEach(() => {
      req = {
        params: { techniqueId: '612cdc22f51271a5127ca260' }
      };
    });
    describe('When is triggered', () => {
      describe('And findById resolves', () => {
        test('Then res.json is called', async () => {
          Technique.findById
            .mockReturnValue({
              populate: jest.fn().mockResolvedValue({
                name: '',
                reviews: [{ technique: {}, user: '', score: 4 }]
              })
            });

          await controllers.getOneTechniqueById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findById rejects', () => {
        test('Then call status with 500', async () => {
          Technique.findById
            .mockReturnValue({
              populate: jest.fn().mockRejectedValue()
            });

          await controllers.getOneTechniqueById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
  /// ///
  describe('Given a getTechniquesByUserProviderId function', () => {
    beforeEach(() => {
      req = {
        params: { userProviderId: '612cdc22f51271a5127ca260' }
      };
    });
    describe('When is triggered', () => {
      describe('And find resolves', () => {
        test('Then res.json is called', async () => {
          Technique.find
            .mockReturnValue({
              populate: jest.fn().mockResolvedValue({
                name: '',
                reviews: [{ technique: {}, user: '', score: 4 }]
              })
            });

          await controllers.getTechniquesByUserProviderId(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And find rejects', () => {
        test('Then call status with 500', async () => {
          Technique.find
            .mockReturnValue({
              populate: jest.fn().mockRejectedValue()
            });

          await controllers.getTechniquesByUserProviderId(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
  /// /
  describe('Given a updateOneTechniqueById function', () => {
    beforeEach(() => {
      req = {
        params: { techniqueId: '612cdc22f51271a5127ca260' },
        body: {}
      };
    });
    describe('When is triggered', () => {
      describe('And findByIdAndUpdate response', () => {
        test('Then res.json is called', async () => {
          Technique.findByIdAndUpdate.mockResolvedValue({});

          await controllers.updateOneTechniqueById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findByIdAndUpdate rejects', () => {
        test('Then res.status is called with 500', async () => {
          Technique.findByIdAndUpdate.mockRejectedValue();

          await controllers.updateOneTechniqueById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a deleteOneTechniqueById function', () => {
    describe('When is triggered', () => {
      describe('And findByIdAndDelete response', () => {
        test('Then res.json is called', async () => {
          Technique.findByIdAndDelete.mockResolvedValue();

          await controllers.deleteOneTechniqueById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findByIdAndDelete rejects', () => {
        test('Then res.status is called with 500', async () => {
          Technique.findByIdAndDelete.mockRejectedValue();

          await controllers.deleteOneTechniqueById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
});
