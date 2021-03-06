var express = require('express');
var router = express.Router();
var crypto = require('crypto'),
    User = require('../database/user.js');
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login',{title:"登录",
        user: req.session.user,
        success: req.flash('success').toString(),
        error: req.flash('error').toString()});
});
router.post('/login',function(req,res,next){
	//生成密码的 md5 值
  var md5 = crypto.createHash('md5'),
      password = md5.update(req.body.password).digest('hex');
  //检查用户是否存在
  User.get(req.body.name, function (err, user) {
    if (!user) {
      req.flash('error', '用户不存在!'); 
      return res.redirect('/login');//用户不存在则跳转到登录页
    }
    //检查密码是否一致
    if (user.password != password) {
      req.flash('error', '密码错误!'); 
      return res.redirect('/login');//密码错误则跳转到登录页
    }
    //用户名密码都匹配后，将用户信息存入 session
    req.session.user = user;
    req.flash('success', '登陆成功!');
    res.redirect('/');//登陆成功后跳转到主页
  });
	})
module.exports = router;
