/**
 * Created by Yuan on 2016/4/2.
 */
var cheerio = require('cheerio');

var $ = cheerio.load('<h1 class="title"> Hello zfpx</h1>');

$('h1.title').text('Hello nodeJs')

$('h1.title').addClass('red')

console.log($.html());

