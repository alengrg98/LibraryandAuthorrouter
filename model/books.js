var mongoose=require('mongoose');
var schema=mongoose.Schema;

var bookschema=new schema({
    title:{type:String,required:true},
    author:String,
    description:String,
    category:String,
    price:Number,
    urltoimage:String

})

var bookmodel=mongoose.model("books",bookschema);
module.exports=bookmodel;