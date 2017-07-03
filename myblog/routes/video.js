/**
 * Created by Administrator on 2017/7/2 0002.
 */
var express=require('express');
var router=express.Router();

router.get('/video',function(req,res,next){

    res.render('video',{title:"视频"})
})
router.post('/video',function(req,res,next){

})
module.exports = router;