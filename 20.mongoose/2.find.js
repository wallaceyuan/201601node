/**
 * Created by Yuan on 2016/3/20.
 */
var models = require('./schema/person')
var PersonModel = models.PersonModel

var personEntity = new PersonModel({
    name : "zfpx",
    age  : 16,
    email: "zfpx@qq.com"
});
personEntity.save(function(error,doc){
    if(error){
        console.log("error :" + error);
    }else{
        //console.log(doc);
    }
});
for(var i = 0;i<10;i++){
    var personEntity = new PersonModel({
        name : "zfpx"+i,
        age  : 16,
        email: "zfpx@qq.com"
    });
    personEntity.save(function(error,doc){
        if(error){
            console.log("error :" + error);
        }else{
            //console.log(doc);
        }
    });
}

PersonModel.create({ name:"zfpxas", age:7}, function(error,doc){
    if(error) {
        console.log(error);
    } else {
        //console.log(doc);
    }
});
PersonModel.find({name:'zfpx1'},function(err,doc){
    //console.log(doc);
});
