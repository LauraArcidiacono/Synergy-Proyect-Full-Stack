const Review = require('../models/reviewModel');
const controllers = require('./reviewControllers');

jest.mock('../models/reviewModel');

describe('reviewControllers', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
  });
  describe('Given a getAllReviews function', () => {
    describe('When is triggered', () => {
      describe('And find resolved', () => {
        test('Then call json', async () => {
          req = {
            query: jest.fn()
          };

          Review.find.mockReturnValue({
            populate: jest.fn().mockResolvedValue({
              user: {}
            })
          });

          await controllers.getAllReviews(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And find rejects', () => {
        test('Then call status 500', async () => {
          req = {
            query: jest.fn()
          };

          Review.find.mockRejectedValue();

          await controllers.getAllReviews(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a createOneReview function', () => {
    describe('When is triggeres', () => {
      describe('And create resolved', () => {
        test('Then call json', async () => {
          req = {
            body: {}
          };
          Review.create.mockResolvedValue({});

          await controllers.createOneReview(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And create rejected', () => {
        test('Then call status with 500', async () => {
          req = {
            body: {}
          };
          Review.create.mockRejectedValue();

          await controllers.createOneReview(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a getOneReviewById function', () => {
    beforeEach(() => {
      req = {
        params: { ReviewId: 'i12794567364848712313197' }
      };
    });
    describe('When is triggered', () => {
      describe('And findById resolves', () => {
        test('Then res.json is called', async () => {
          Review.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn()
                  .mockResolvedValue({
                    technique: [{}],
                    user: [{}]
                  })
              })
            });

          await controllers.getOneReviewById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findById rejects', () => {
        test('Then call status with 500', async () => {
          Review.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockRejectedValue()
              })
            });

          await controllers.getOneReviewById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a updateOneReviewById function', () => {
    beforeEach(() => {
      req = {
        params: { ReviewId: 'i548742f51271a5127fe8777' },
        body: {}
      };
    });
    describe('When is triggered', () => {
      describe('And findByIdAndUpdate response', () => {
        test('Then res.json is called', async () => {
          Review.findByIdAndUpdate.mockResolvedValue({});

          await controllers.updateOneReviewById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And findByIdAndUpdate rejects', () => {
        test('Then res.status is called with 500', async () => {
          Review.findByIdAndUpdate.mockRejectedValue();

          await controllers.updateOneReviewById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });

  describe('Given a deleteOneReviewById function', () => {
    describe('When is triggered', () => {
      describe('And findByIdAndDelete response', () => {
        test('Then res.json is called', async () => {
          Review.findByIdAndDelete.mockResolvedValue();

          await controllers.deleteOneReviewById(req, res);

          expect(res.json).toHaveBeenCalledWith('The Review has been deleted');
        });
      });

      describe('And findByIdAndDelete rejects', () => {
        test('Then res.status is called with 500', async () => {
          Review.findByIdAndDelete.mockRejectedValue();

          await controllers.deleteOneReviewById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
});
