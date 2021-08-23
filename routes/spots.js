var express = require('express');
var router = express.Router();
const spotController = require("../controllers/spot.controller.js");

router.post('/newSpot', function(req, res, next) {
  spotController.createSpot(req.body)
  res.send('respond with a resource');
});

router.get('/getSpots', spotController.showSpot);

module.exports = router;