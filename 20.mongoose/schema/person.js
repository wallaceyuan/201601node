
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/person");

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

module.exports = {
    PersonModel:PersonModel
}