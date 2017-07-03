/**
 * Created by Administrator on 2017/7/2 0002.
 */
var express=require('express');
var router=express.Router();
var Post = require('../database/post.js');
router.get('/person',function(req,res,next){
    if(!req.session.user){
		req.flash("error",'您还未登陆');
		return res.redirect('/login');
		}
		else{
    res.render('person',{title:"编辑文章",error:req.flash('error').toString()})
		}
})
router.post('/person',function(req,res,next){
       var currentUser = req.session.user,
      post = new Post(currentUser.name, req.body.title, req.body.post);
  post.save(function (err) {
    if (err) {
      req.flash('error', err); 
      return res.redirect('/');
    }
    req.flash('success', '发布成功!');
    res.redirect('/');//发表成功跳转到主页
  });
})
module.exports = router;