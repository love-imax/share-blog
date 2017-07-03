/**
 * Created by Administrator on 2017/7/2 0002.
 */
var express=require('express');
var router=express.Router();

router.get('/music',function(req,res,next){

    res.render('music',{title:"音乐"})
})
router.post('/music',function(req,res,next){

})
module.exports = router;