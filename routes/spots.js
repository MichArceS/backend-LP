var express = require('express');
var router = express.Router();
const spotController = require("../controllers/spot.controller.js");

router.post('/newSpot', function(req, res, next) {
  spotController.createSpot(req.body)
  res.send('respond with a resource');
});

router.get('/getSpots', spotController.showSpot);

router.post('/updateSpot', function(req, res, next) {
  spotController.updateSpot(req.body)
  res.send('respond with a resource');
});

router.post('/deleteSpot', function(req, res, next) {
  spotController.deleteSpot(req.body)
  res.send('respond with a resource');
});

module.exports = router;