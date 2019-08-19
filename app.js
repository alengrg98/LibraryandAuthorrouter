const express=require("express");
const path=require("path");

var app=express();
app.use(express.static(path.join(__dirname,"/public")));

var bookrouter=require('./routes/bookrouter');
app.use("/books",bookrouter);

var authorrouter=require('./routes/authorrouter');
app.use("/authors",authorrouter);

app.set("views","./src/views");
app.set("view engine","ejs");



app.get("/",function(req,res){
    res.render("index",{pagetitle:"Library",nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"}]});
})

/*app.get("/books",function(req,res){
    res.render("books",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"}],booksarray:book_arr});
})
app.get("/books/:id",function(req,res){
   
    res.render("singlebook",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"}],book:book_arr[req.params.id]});
    var temp=req.params.id;
    console.log(temp);
   
    
})
                        this is now handled by bookrouter


app.get("/authors",function(req,res){
    res.render("author",{pagetitle:"Library",nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}],authorarray:author_arr});
})
*/
app.listen(8090,function(req,res){
    console.log("Server is Up !!");
    
})