const express=require("express");
const path=require("path");

var mongoose=require("mongoose");
var url="mongodb://localhost/library";
mongoose.connect(url,function(err){
    if(err) throw err;

    else
    console.log("DB CONNECTED");
})

var app=express();
app.use(express.static(path.join(__dirname,"/public")));

var bookrouter=require('./routes/bookrouter');
app.use("/books",bookrouter);

var authorrouter=require('./routes/authorrouter');
app.use("/authors",authorrouter);

var loginrouter=require('./routes/loginrouter');
app.use("/login",loginrouter);

var signuprouter=require('./routes/signuprouter');
app.use("/signup",signuprouter);


app.set("views","./src/views");
app.set("view engine","ejs");



app.get("/",function(req,res){
    res.render("login",
    {
        pagetitle:"Library",
        nav:[
            {
                link:"/books",title:"Books"
            },
            {
                link:"/authors",title:"Authors"
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
            ,
            {
                link:"/delete",title:"DELETE BOOKS"
            },
            
            {
                link:"/update",title:"UPDATE BOOKS"
            }]
        });
})

app.post("/login",function(req,res){
    res.render("index",
    {
        pagetitle:"Library",
        nav:[{
            link:"/books",title:"Books"
        },
        {
            link:"/authors",title:"Authors"
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
        ,
        {
            link:"/delete",title:"DELETE BOOKS"
        },
        {
            link:"/update",title:"UPDATE BOOKS"
        }
    ]
    });
})



app.get("/index",function(req,res){
    res.render("index",{pagetitle:"Library",nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"},{
        link:"/delete",title:"DELETE BOOKS"},
        {
            link:"/update",title:"UPDATE BOOKS"
        }
]}
);
})


app.get("/addbooks",function(req,res){
    res.render("addbooks",
    {
        pagetitle:"Library",
        nav:[
            {
                link:"/books",title:"Books"
            },
            {
                link:"/authors",title:"Authors"
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
            ,
            {
                link:"/delete",title:"DELETE BOOKS"
            },
            {
                link:"/update",title:"UPDATE BOOKS"
            }
        ]
        });
})

app.get("/delete",function(req,res){
    res.render("deletebooks",
    {
        pagetitle:"Library",
        nav:[
            {
                link:"/books",title:"Books"
            },
            {
                link:"/authors",title:"Authors"
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
            ,
            {
                link:"/delete",title:"DELETE BOOKS"
            },
            {
                link:"/update",title:"UPDATE BOOKS"
            }
        ]
        });
})


app.get("/update",function(req,res){
    res.render("update",
    {
        pagetitle:"Library",
        nav:[
            {
                link:"/books",title:"Books"
            },
            {
                link:"/authors",title:"Authors"
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
            ,
            {
                link:"/delete",title:"DELETE BOOKS"
            },
            {
                link:"/update",title:"UPDATE BOOKS"
            }
        ]
        });
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