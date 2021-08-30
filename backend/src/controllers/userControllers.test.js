const User = require('../models/userModel');
const controllers = require('./userControllers');

jest.mock('../models/userModel');

describe('UserControllers', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
  });
  describe('Given a getAll function', () => {
    describe('When is triggered', () => {
      describe('And find resolved', () => {
        test('Then call json', async () => {
          req = {
            query: jest.fn()
          };

          User.find.mockResolvedValue();

          await controllers.getAll(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And find rejects', () => {
        test('Then call status 500', async () => {
          req = {
            query: jest.fn()
          };

          User.find.mockRejectedValue();

          await controllers.getAll(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a createOne function', () => {
    describe('When is triggeres', () => {
      describe('And find resolved', () => {
        test('Then call json', async () => {
          req = {
            body: {}
          };
          User.find.mockResolvedValue({});

          await controllers.createOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And find rejected', () => {
        test('Then call status with 500', async () => {
          req = {
            body: {}
          };
          User.create.mockRejectedValue();

          await controllers.createOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getById function', () => {
    beforeEach(() => {
      req = {
        params: { userId: '612cdc22f51271a5127ca260' }
      };
    });
    describe('When is triggered', () => {
      describe('And findById resolves', () => {
        test('Then res.json is called', async () => {
          User.findById.mockResolvedValue({});

          await controllers.getById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findById rejects', () => {
        test('Then call status with 500', async () => {
          User.findById.mockRejectedValue();

          await controllers.getById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a updateOneById function', () => {
    beforeEach(() => {
      req = {
        params: { userId: '612cdc22f51271a5127ca260' },
        body: {}
      };
    });
    describe('When is triggered', () => {
      describe('And findByIdAndUpdate response', () => {
        test('Then res.json is called', async () => {
          User.findByIdAndUpdate.mockResolvedValue({});

          await controllers.updateOneById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findByIdAndUpdate rejects', () => {
        test('Then res.status is called with 500', async () => {
          User.findByIdAndUpdate.mockRejectedValue();

          await controllers.updateOneById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a deleteOneByIde function', () => {
    describe('When is triggered', () => {
      describe('And findByIdAndDelete response', () => {
        test('Then res.json is called', async () => {
          User.findByIdAndDelete.mockResolvedValue();

          await controllers.deleteOneById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findByIdAndDelete rejects', () => {
        test('Then res.status is called with 500', async () => {
          User.findByIdAndDelete.mockRejectedValue();

          await controllers.deleteOneById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
});
