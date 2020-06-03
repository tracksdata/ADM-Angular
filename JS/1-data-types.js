console.log('-- data types --');

/*  

Data Types
------------
    primitive types
        1. number
        2. boolean
        3. string
        4. undefined
        5. bigint
*/

//   1. number
//---------------------
var a = 100;


// 2. boolean

var b = true;

// 3. string

var s1 = 'abc';
var s2 = "Xyz";

var trainer = 'James'
var sub = 'Angular'

var s3 = trainer + 'is  teaching ' + sub;

// note - use back tik operator  - allows multiline  statemnets

let s4 = `
Trainer name is  ${trainer}
And ${trainer} is teaching ${sub}
`

var htmlTeample = `
    <div>
        <h1>${trainer} is teaching ${sub}</h1>
        <hr/>
        <button>Click Me </button>
    </div>
`
//var s5="<button type='submit' style='{color:'red'}' onclick='alert('Hi')> Click Here</button>"
var s6 = `
<button type='submit' onClick=alert('Hi')>
Click Me
</button>
`
let rootDiv = document.querySelector('#root');

rootDiv.innerHTML = s6



// 4.undefined

var ename;

// 5. big int
var count = 8648364346384638463846384683468468n;


// complex / reference / object Types
//----------------------------------------

//var p={}; //object

/*
    what is an object?

    => data / info / attributes / properties ==> state
    => function / methods / work / operations ==> behaviour
    => address / location / reference ==> identity

    ==> s b i 
    eg trainer-obj
        -> state (name,age,skills)
        -> behaviour (teach)
        -> identity (where am i)


       
*/


//  two ways we can create object in js
// way-1  - new operator 



var trainer = new Object();
trainer.name = 'Praveen';
trainer.age = 36;
trainer.skills = ['Java', 'JS', 'ANguar', 'React'];

// how to create cuson object in js?
// 2 ways
// way - 1 - using ES5 constructor technique

// create class employee 
// note: making capitalization of a function is become class in ES5

function Employee(name, age) {
    this.name = name;
    this.age = age;

    Employee.prototype.sayName = function () {
        console.log('name is ' + this.name);
    }
}

var e1 = new Employee('Praveen', 87);
//e1.sayName();

class Person {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log('name is ' + this.name);

    }

}

var p1 = new Person('Bucky');
p1.sayName();


// way 2  - literal

const customer = { // JSON object - Java script object notation
    name: 'Praveen',
    age: 86,
    addr: 'Hyderabad'
}
//Object.preventExtensions(customer); //  const ...

customer.description='He is good'
customer.name='James';

// notes

var v1='abc';
var v2='Xyz';
//v2=v1+v2; // mutable
var v3=v2.concat(v1); // immutable

const n11=1000; // immutable
//n11=2000;

// objects cam be immutable by defaining into preventExtension function

const user={
    name:'user1'
}

Object.seal(user); // doent make immutable

//Object.preventExtensions(user);
user.name='user2';
user.url='test';
















