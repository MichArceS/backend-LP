var express = require('express');
var router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post('/newUser', function(req, res, next) {
  userController.createUser(req.body)
  res.send('respond with a resource');
});

router.get('/getUsers', userController.showUsers);


router.post('/updateUser', function(req, res, next) {
  console.log(req.body);
  userController.updateUser(req.body)
  res.send('respond with a resource');
});

module.exports = router;
