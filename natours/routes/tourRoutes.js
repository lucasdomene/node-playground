const express = require('express');
const { getAllTours, getTour, createTour, checkId } = require('../controllers/tourController');

const tourRouter = express.Router();

tourRouter.param('id', checkId);

tourRouter.route('/:id')
  .get(getTour)

tourRouter.route('/')
  .get(getAllTours)
  .post(createTour);

module.exports = tourRouter;