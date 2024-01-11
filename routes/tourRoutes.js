const fs = require('fs');
const express = require('express');
const app = express();

const tourController = require('./../controllers/tourController');

// Route handlers for TOURS
// Handling GET request to tours

const router = express.Router();

//middleware that runs for the param in the url
//the fourth argument is specific to param middleware which contains the value for the param in question
// router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour); //nested middle ware , first checkBody runs then createTour runs
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
