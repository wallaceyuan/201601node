/**
 * Created by yuan on 2016/3/18.
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://123.57.143.189:27017/zfpx");
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});