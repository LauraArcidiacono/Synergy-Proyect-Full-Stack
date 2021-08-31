const Resource = require('../models/resourceModel');
const controllers = require('./resourceControllers');

jest.mock('../models/resourceModel');

describe('ResourceControllers', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
  });
  describe('Given a getAllResources function', () => {
    describe('When is triggered', () => {
      describe('And find resolved', () => {
        test('Then call json', async () => {
          req = {
            query: jest.fn()
          };

          Resource.find.mockResolvedValue();

          await controllers.getAllResources(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And find rejects', () => {
        test('Then call status 500', async () => {
          req = {
            query: jest.fn()
          };

          Resource.find.mockRejectedValue();

          await controllers.getAllResources(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a createOneResource function', () => {
    describe('When is triggeres', () => {
      describe('And create resolved', () => {
        test('Then call json', async () => {
          req = {
            body: {}
          };
          Resource.create.mockResolvedValue({});

          await controllers.createOneResource(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And create rejected', () => {
        test('Then call status with 500', async () => {
          req = {
            body: {}
          };
          Resource.create.mockRejectedValue();

          await controllers.createOneResource(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getOneResourceById function', () => {
    beforeEach(() => {
      req = {
        params: { resourceId: 'i1687986565456533364565674' }
      };
    });
    describe('When is triggered', () => {
      describe('And findById resolves', () => {
        test('Then res.json is called', async () => {
          Resource.findById.mockResolvedValue();

          await controllers.getOneResourceById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findById rejects', () => {
        test('Then call status with 500', async () => {
          Resource.findById.mockRejectedValue();

          await controllers.getOneResourceById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a updateOneResourceById function', () => {
    beforeEach(() => {
      req = {
        params: { resourceId: 'i319754567585457567957452' },
        body: {}
      };
    });
    describe('When is triggered', () => {
      describe('And findByIdAndUpdate response', () => {
        test('Then res.json is called', async () => {
          Resource.findByIdAndUpdate.mockResolvedValue({});

          await controllers.updateOneResourceById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findByIdAndUpdate rejects', () => {
        test('Then res.status is called with 500', async () => {
          Resource.findByIdAndUpdate.mockRejectedValue();

          await controllers.updateOneResourceById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a deleteOneResourceById function', () => {
    beforeEach(() => {
      req = {
        params: { resourceId: 'i49735912758975479856416' }
      };
    });
    describe('When is triggered', () => {
      describe('And findByIdAndDelete response', () => {
        test('Then res.json is called', async () => {
          Resource.findByIdAndDelete.mockResolvedValue({});

          await controllers.deleteOneResourceById(req, res);

          expect(res.json).toHaveBeenCalledWith('The resource has been deleted');
        });
      });

      describe('And findByIdAndDelete rejects', () => {
        test('Then res.status is called with 500', async () => {
          Resource.findByIdAndDelete.mockRejectedValue();

          await controllers.deleteOneResourceById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
});
