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
  describe('Given a getAllUsers function', () => {
    describe('When is triggered', () => {
      describe('And find resolved', () => {
        test('Then call json', async () => {
          req = {
            query: jest.fn()
          };

          User.find.mockResolvedValue();

          await controllers.getAllUsers(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And find rejects', () => {
        test('Then call status 500', async () => {
          req = {
            query: jest.fn()
          };

          User.find.mockRejectedValue();

          await controllers.getAllUsers(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a createOneUser function', () => {
    describe('When is triggeres', () => {
      describe('And create resolved', () => {
        test('Then call json', async () => {
          req = {
            body: {}
          };
          User.create.mockResolvedValue({});

          await controllers.createOneUser(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And create rejected', () => {
        test('Then call status with 500', async () => {
          req = {
            body: {}
          };
          User.create.mockRejectedValue();

          await controllers.createOneUser(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getOneUserById function', () => {
    beforeEach(() => {
      req = {
        params: { userId: 'i2cdc22f51271a5127ca260' }
      };
    });
    describe('When is triggered', () => {
      describe('And findById resolves', () => {
        test('Then res.json is called', async () => {
          User.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn()
                  .mockResolvedValue({
                    name: '',
                    favoriteTechniques: [{}],
                    techniquesProvided: [{}]
                  })
              })
            });

          await controllers.getOneUserById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findById rejects', () => {
        test('Then call status with 500', async () => {
          User.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockRejectedValue()
              })
            });

          await controllers.getOneUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a updateOneUserById function', () => {
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

          await controllers.updateOneUserById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findByIdAndUpdate rejects', () => {
        test('Then res.status is called with 500', async () => {
          User.findByIdAndUpdate.mockRejectedValue();

          await controllers.updateOneUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a deleteOneUserById function', () => {
    describe('When is triggered', () => {
      describe('And findByIdAndDelete response', () => {
        test('Then res.json is called', async () => {
          User.findByIdAndDelete.mockResolvedValue();

          await controllers.deleteOneUserById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findByIdAndDelete rejects', () => {
        test('Then res.status is called with 500', async () => {
          User.findByIdAndDelete.mockRejectedValue();

          await controllers.deleteOneUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
});
