const express=require("express");
const path=require("path");

var app=express();
app.use(express.static(path.join(__dirname,"/public")));

var bookrouter=require('./routes/bookrouter');
app.use("/books",bookrouter);

app.set("views","./src/views");
app.set("view engine","ejs");

var author_arr=[{
    name:"abc",
    bnames:"bname1",
    price:"120"
},
{
    name:"bcd",
    bnames:"bname2",
    price:"220"
},
{
    name:"cde",
    bnames:"bname3",
    price:"320"
}];


app.get("/",function(req,res){
    res.render("index",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"}]});
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
*/  

app.get("/authors",function(req,res){
    res.render("author",{authorarray:author_arr});
})

app.listen(8090,function(req,res){
    console.log("Server is Up !!");
    
})