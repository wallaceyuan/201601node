/**
 * Created by Yuan on 2017/3/5.
 */
var Radio = require('./radio.js')

var statio = {
    freq:'80.16',
    name: 'Rock N Roll Radio'
}

var radio = new Radio(statio)

radio.on('open', function(station) {
    console.log('"%s" FM %s 打开', station.name, station.freq);
    console.log('♬ ♫♬');
});

radio.on('close', function(station) {
    console.log('"%s" FM %s 关闭', station.name, station.freq);
});
