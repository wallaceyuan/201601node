
var Person = {
    name:'yuanyuan',
    sayName:function () {
        alert(this.name)
    }
}

var person = Object.create(Person)
person.sayName()