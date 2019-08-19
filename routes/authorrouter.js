var express=require('express');

const router=express.Router();
var author_arr=[{
    name:"George R. R. Martin",
    bnames:"A Game of Thrones",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam eaque harum error ducimus saepe quae eum beatae! Velit doloremque officiis qui obcaecati recusandae repellat aliquam nesciunt facilis eveniet animi",    
    urltoimage:"https://images.immediate.co.uk/production/volatile/sites/3/2018/09/GettyImages-1035092140-54c7742.jpg?quality=45&resize=620,413"

},
{
    name:"William Shakespeare",
    bnames:"Romeo and Juliet",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam eaque harum error ducimus saepe quae eum beatae! Velit doloremque officiis qui obcaecati recusandae repellat aliquam nesciunt facilis eveniet animi",    
    urltoimage:"https://www.williamshakespeare.net/images/shakespeare.jpg"
},
{
    name:"Charles Dickens",
    bnames:"Oliver Twist",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam eaque harum error ducimus saepe quae eum beatae! Velit doloremque officiis qui obcaecati recusandae repellat aliquam nesciunt facilis eveniet animi",    
    urltoimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Charles_Dickens_1867.jpg/220px-Charles_Dickens_1867.jpg"
}];

router.get("/",function(req,res){
    res.render("author",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"}],authorarray:author_arr});
})


module.exports=router;