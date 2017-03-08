/**
 * Created by Yuan on 2016/3/20.
 */
var models = require('./schema/person')
var PersonModel = models.PersonModel

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