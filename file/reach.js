var walk    = require('walk')
    , fs      = require('fs')
    , path    = require('path')
    , walker  = walk.walk("./tmp", { followLinks: false })
    ;

var Client = require('ftp');
var c = new Client();



c.connect({
    host: "172.24.24.217",
    port: 22152, // defaults to 21
    user: "root", // defaults to "anonymous"
    pass: "cmltbbsotw120979!" // defaults to "@anonymous"
});

/*
c.on('ready', function () {
    console.log('ready');
});
*/


/*
walker.on("file", fileHandler);
walker.on("errors", errorsHandler); // plural
walker.on("end", endHandler);

function fileHandler(root, fileStat, next) {
    fs.readFile(path.resolve(root, fileStat.name), function (buffer) {
        console.log(root, fileStat.name);
        //console.log(fileStat.name, buffer.byteLength);
        next();
    });
}

function errorsHandler(root, nodeStatsArray, next) {
    nodeStatsArray.forEach(function (n) {
        console.error("[ERROR] " + n.name)
        console.error(n.error.message || (n.error.code + ": " + n.error.path));
    });
    next();
}

function endHandler() {
    console.log("all done");
}*/
