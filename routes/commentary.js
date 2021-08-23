var express = require('express');
var router = express.Router();
const commentaryController = require("../controllers/commentary.controller.js");

router.post('/newCommentary', function(req, res, next) {
    commentaryController.createCommentary(req.body)
  res.send('respond with a resource');
});

router.get('/getCommentaries', commentaryController.showCommentary);

module.exports = router;
