/**
 * Created by otvcloud on 2017/3/8.
 */

var assert = require('assert')

function add (a,b) {
    return a + b
}

var expected = add(1,2)
assert( expected === 3,'预期1加2等于3' )
//assert( expected === 4,'预期1加2等于3')
assert.equal(expected,3,'预期1+2=3')