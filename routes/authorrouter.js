var express=require('express');

const router=express.Router();

var author=require('../model/authors');

router.get("/",function(req,res){
   author.find({},function(err,result){
       if (err) throw err;

       else
       {
        res.render(
            "author",
            {
                pagetitle:"Library",
                nav:[
                    {
                        link:"books",title:"Books"
                    },
                    {
                        link:"authors",title:"Authors"
                    },
                    {
                        link:"/signup",title:"SIGN UP"
                    },
                    {
                        link:"/login",title:"LOGIN"
                    },
                    {
                        link:"/addbooks",title:"ADD BOOKS"
                    }
                    ],
                    authorarray:result});
       }
   })
})


module.exports=router;