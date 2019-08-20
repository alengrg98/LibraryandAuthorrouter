var express=require('express');
var user=require("../model/user");
var body=require("body-parser");

const router=express.Router();
router.use(body.urlencoded({extended:true}));

router.get("/",function(req,res){
    res.render("login",
    {pagetitle:"Library",
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
        },
        {
            link:"/update",title:"UPDATE BOOKS"
        }
    ]
});
})

router.post("/",function(req,res){
   
    user.find({uname:req.body.username,password:req.body.password},function(err,result){
        if (err) throw err;

        else
        {
            if(result.length!=0)
            {
                res.redirect("index");
                
            }
            else
            {
                res.redirect("login");
            }
        }

    })
})

module.exports=router;