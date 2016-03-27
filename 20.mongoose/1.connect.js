/**
 * Created by Yuan on 2016/3/20.
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://123.57.143.189:27017/yuan");
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});

var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
});

var PersonModel = db.model("person", PersonSchema);

var personEntity = new PersonModel({
    name : "zfpx",
    age  : 16,
    email: "zfpx@qq.com"
});

console.log(personEntity.name); // zfpx
console.log(personEntity.age); // 6

personEntity.save(function(error,doc){
    if(error){
        console.log("error :" + error);
    }else{
        console.log(doc);
    }
});