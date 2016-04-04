/**
 * Created by Yuan on 2016/4/2.
 */
var async = require('async');

async.series([
    function(cb){
        setTimeout(function(){
            //console.log('看电视');
            cb(null,'看电视');
        },1000);
    },
    function(cb){
        setTimeout(function(){
            //console.log('做作业');
            cb(null,'做作业');
        },1000);
    }
],function(err,result){
    console.error(err);
    console.log(result);
});