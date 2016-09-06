var fs = require('fs');

function copy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}

function read(src){
	console.log(fs.readFileSync(src).toString());
}


function main(argv) {
	//read(argv[0]);
	copy(argv[0], argv[1]);
}

main(process.argv.slice(2));