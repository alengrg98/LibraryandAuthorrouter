var express=require('express');
var body=require("body-parser");

const router=express.Router();
router.use(body.urlencoded({extended:true}));
var user=require("../model/user");

router.get("/",function(req,res){
    res.render("signup",
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
            },
            {
                link:"/update",title:"UPDATE BOOKS"
            }]
    });
})

router.post("/",function(req,res){
    var u1=new user();
    u1.name=req.body.name;
    u1.uname=req.body.username;
    u1.password=req.body.pass1;
    u1.role=req.body.role;
    u1.save(function(err){
        if (err) throw err;
        else
        {
            console.log("data added");
            res.render("login",
            {
                pagetitle:"Library",
                nav:[
                    {
                        link:"/books",title:"Books"
                    },{
                        link:"/authors",title:"Authors"
                    },
                    {
                        link:"/signup",title:"SIGN UP"
                    },{
                        link:"/login",title:"LOGIN"
                    },
                    {
                        link:"/addbooks",title:"ADD BOOKS"
                    },
                    {
                        link:"/update",title:"UPDATE BOOKS"
                    }]
                
            });

        }
    })
})
module.exports=router;