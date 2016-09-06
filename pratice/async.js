/**
 * Created by yuan on 2016/5/5.
 */

var fs = require('fs');
var count = 0;
var results = {};

fs.readFile('1.txt', "utf8", function (err, template) {
    done("template", template);
});
fs.readFile('1.txt', "utf8", function (err, data) {
    done("data", data);
});
fs.readFile('1.txt', "utf8", function (err, resources) {
    done("resources", resources);
});
/*db.query(sql, function (err, data) {
    done("data", data);
});
l10n.get(function (err, resources) {
    done("resources", resources);
});*/


var after = function (times, callback) {
    var count = 0, results = {};
    console.log('funcout',count);
    return function (key, value) {
        results[key] = value;
        count++;
        console.log('in',count);
        if (count === times) {
            callback(results);
        }
    };
};

var done = after(3, render);

console.log(done);//[Function]

function render(data){
    console.log('render',data);
}