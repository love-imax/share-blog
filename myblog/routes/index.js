var express = require('express');
var router = express.Router();
var Post = require('../database/post.js');
/* GET home page. */
router.get('/', function(req, res, next) {
	Post.getAll(null, function (err, posts) {
    if (err) {
      posts = [];
    } 
  res.render('index', { title: '共享博客',  posts: posts });
  });
 
});

module.exports = router;
