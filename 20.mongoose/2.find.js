/**
 * Created by Yuan on 2016/3/20.
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/people");
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

/*var personEntity = new PersonModel({
    name : "zfpx",
    age  : 16,
    email: "zfpx@qq.com"
});
personEntity.save(function(error,doc){
    if(error){
        console.log("error :" + error);
    }else{
        console.log(doc);
    }
});*/
/*for(var i = 0;i<10;i++){
    var personEntity = new PersonModel({
        name : "zfpx"+i,
        age  : 16,
        email: "zfpx@qq.com"
    });
    personEntity.save(function(error,doc){
        if(error){
            console.log("error :" + error);
        }else{
            console.log(doc);
        }
    });
}*/
PersonModel.create({ name:"zfpxas", age:7}, function(error,doc){
    if(error) {
        console.log(error);
    } else {
        console.log(doc);
    }
});
PersonModel.find({name:'zfpx1'},function(err,doc){
    console.log(doc);
});