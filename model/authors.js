var mongoose=require('mongoose');
var schema=mongoose.Schema;

var authorschema=new schema({
    name:{type:String,required:true},
    bname:String,
    description:String,
    urltoimage:String

})

var authormodel=mongoose.model("authors",authorschema);
module.exports=authormodel;