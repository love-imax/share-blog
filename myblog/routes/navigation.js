/**
 * Created by Administrator on 2017/7/2 0002.
 */
var express=require('express');
var router=express.Router();

router.get('/navigation',function(req,res,next){

    res.render('navigation',{title:"网址导航"})
})
router.post('/navigation',function(req,res,next){

})
module.exports = router;