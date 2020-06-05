/*

two phases

phase-1 : context creatin phase
        any varible created with var keyword get lifted up  to the top of context
phase-2 : context execution phase

*/



/*
//let a=20;
function display() { //  << memory-context context
    //let a = 10;
    function f1() { // << display context
        // let a = 100;
        console.log('name is '+length);
    }

    f1();

}
display();

*/


//----------------
// phase-1 : context creatin phase


//console.log(a); // ubdefined
//var a=100;
//console.log(a); // 100


/*
var v=12;
function f1(){
    console.log(v);  // undefined
    var v=13;
    console.log(v); // 13
}
f1();

*/


/*
var v = 12;
function f1() {
    function f2() {
        console.log(v); // ?
    }
    f2();
    //var v=13; // before creation of f2 function, in f1 function v is created with undefined
}

f1();

*/

//var v = 120;
//var v = 130;
//console.log(v);

//var v = 12;
//{
// v=13;
//  console.log(v); 
//}
//console.log(v);

// use let insted var  // --> Es6
//let v=12;
//let v=13;

/*
let v = 12;
{
    let v = 13;
    console.log(v);
}

console.log(v);

*/


/*

let v = 12;
function f1() {

    function f2() {
        console.log(v);
    }
    f2();
   // let v = 13; // error
}

f1();

*/


let v=100;

console.log(v);





