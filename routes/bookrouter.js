var express=require('express');

const router=express.Router();
var book=require('../model/books');

router.get("/",function(req,res){
    book.find({},function(err,result){
        if (err) throw err;
        else
        {
            res.render("books",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"}],booksarray:result});

        }

    })
})
router.get("/:id",function(req,res){
   
    res.render("singlebook",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"}],book:book_arr[req.params.id]});
    var temp=req.params.id;
    console.log(temp);
   
    
})

module.exports=router;