/**
 * Created by Yuan on 2016/3/20.
 */
var models = require('./schema/person')
var PersonModel = models.PersonModel

PersonModel.update({name : 'zfpxas'}, {$set : { age : 1001 }}, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('Update success!');
    }
});
PersonModel.remove({name:'zfpxas'},function(err,docs){
    //result: { ok: 1, n: 3 }
    console.log(docs);
});