var express=require('express');

var book=require('../model/books');
var body=require("body-parser");

const router=express.Router();

router.use(body.urlencoded({extended:true}));


router.get("/",function(req,res){
    book.find({},function(err,result){
        if (err) throw err;
        else
        {
            res.render("books",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"},{link:"/delete",title:"DELETE BOOKS"},
            {
                link:"/update",title:"UPDATE BOOKS"
            }],booksarray:result});

        }

    })
})
router.get("/:id",function(req,res){
   book.find({},function(err,result){

    res.render("singlebook",
    {
        pagetitle:"Library",
        nav:[{
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
        },
        {
            link:"/update",title:"UPDATE BOOKS"
        }
    ],
        book:result[req.params.id]});
    var temp=req.params.id;
    console.log(temp);
   

   })
    
    
})

router.post("/add",function(req,res){
    var b1=new book();
    b1.title=req.body.title;
    b1.author=req.body.author;
    b1.description=req.body.description;
    b1.category=req.body.category;
    b1.price=req.body.price;
    b1.urltoimage=req.body.url;
      b1.save(function(err){
          if (err) throw err;
          else
          {
            res.redirect("/books");

          }
      })
})

router.post("/delete",function(req,res){
    
    
    book.deleteOne({title:req.body.title},function(err,result){
        if (err) throw err;

        else
            res.redirect("/books");

    })
    
      
      })



router.post("/update",function(req,res){
    
    
        book.updateOne({title:req.body.title1},function(err,result){
            if (err) throw err;
    
            else
                res.redirect("/books");
    
        })
        
          
          })

    

module.exports=router;