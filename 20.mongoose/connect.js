/**
 * Created by Yuan on 2016/3/20.
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/person");
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
})

var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
});
var PersonModel = db.model("person", PersonSchema);
var personEntity = new PersonModel({
    name : "wallace",
    age  : 41,
    email: "wallace@qq.com"
});
personEntity.save(function(error,doc){
    if(error){
        console.log("error :" + error);
    }else{
        console.log(doc);
    }
});