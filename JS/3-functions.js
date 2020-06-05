/**
 * imp note
 * -----------
 * function is an object in java script
 * 
 *   how create/drfine function in js?
 * ---------------------------------------
 *  2 ways
 *  way-1:  function declaration / named function
 *  way-2 : function expression / anonymous function
 *   
 */


// way-1: function declaration / named function
// function object will get created at scope creation-phase
// always hoist(lifted up) with function-obj


function display() {
    console.log('hey ! i am display...');
}

///display();
//
// issues ?
//sayName(); // ? // function creation context / scope
function sayName() {
    console.log('i am Praveen');
}


// way-2 : function expression / anonymous function
// function object get created while executing


var age = function () { // context / scope executin phase
    console.log('age is 76');
    return 'returned some data';
}
//age();

// note: every function shoud retirn value

// function parameters
function f1(a, b) {

    /* console.log(arguments[0]);
     console.log(arguments[1]);
     console.log(arguments[2]);
     console.log(arguments[3]);
     console.log(arguments[4]);
     console.log(arguments[5]);
     */

    let size = arguments.length;
    console.log(size);

}

//f1(10); //? 

function sum() {
    let len = arguments.length;
    result = 0;
    i = 0;
    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result;
}

//----------------------------------------------------------------
// can we function overloading in js? no
//----------------------------------------------------------------
// Note: function context / scope name is function name
// notes; there  will be only one context name

function getLunch() { // context : getLunch
    return 'No Lunch'
}

function getLunch(pay) { // context : getLunch
    return 'biryani'
}

function getLunch(pay, extra) { // context : getLunch
    //................................................................
    return 'biryani ' + ' soft drink'
}

//console.log(getLunch());

function getLunch() {
    if (arguments.length === 0)
        return 'No Lunch'
    if (arguments.length === 1)
        return 'biryani'
    if (arguments.length === 2)
        return 'biryani ' + ' soft softdrink'
}
//console.log(getLunch(150,20));

// few es 6 featutes
function f2(a=10,b=20,...c){ // rest argumnet must be last formal argument 
console.log(a);
console.log(b);
console.log(c);

}

//f2(100,150,8,2,9,87,54,76);

function f3(...r,x,y){
    console.log(r);
    console.log(x);
    console.log(y);
}
//f3(10,20,30,40);// ? error 




















