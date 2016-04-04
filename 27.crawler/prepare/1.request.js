/**
 * Created by Yuan on 2016/4/2.
 */
var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');

request({url:'http://top.baidu.com/category?c=10&fr=topindex',encoding:null},function(err,response,body){
    var result = iconv.decode(body,'gbk');
    var $ = cheerio.load(result);
    $('.hd .title a').each(function(){
        var $me = $(this);
        console.log($me.text());
    });
});