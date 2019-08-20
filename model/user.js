var mongoose=require('mongoose');
var schema=mongoose.Schema;

var userschema=new schema({
    name:{type:String,required:true},
    uname:String,
    password:String,
    role:String

})

var usermodel=mongoose.model("users",userschema);
module.exports=usermodel;