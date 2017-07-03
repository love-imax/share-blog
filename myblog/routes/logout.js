/**
 * Created by Administrator on 2017/7/2 0002.
 */
var express=require('express');
var router=express.Router();

router.get('/logout',function(req,res,next){
     req.session.user = null;
  
    res.redirect('/');
  
})

module.exports = router;