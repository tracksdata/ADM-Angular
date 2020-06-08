
// return type of functions
// 1. as a value

function sayName() {
    return 'Praveen';
}

// 2. as object

function getProduct() {
    return {
        id: 'P001',
        name: 'Pen',
        price: 76.32,
        description: 'Red Ink'
    }
}

let p1 = getProduct();

// 3. as function

/*
function doTraining() {
    console.log('Training started..');

    function doTask() {
        console.log('Task assigned ');
    }

    doTask(); 
    console.log('Traing ended');

}

*/

/**
 *  Note: 
 * => when parent function scope is ended, then
 *    all its child function scopes are destroyed
 * 
 * => can hold references of all parant function children even 
 *     parent function is ended. : closures
 *
 */



function doTraining() {
    console.log('Training started..');

    function doTask(taskName) {
        console.log('Task assigned : ' + taskName);
    }
    //doTask(taskName);
    console.log('Traing ended');
    return doTask; // function

}


//doTraining('T1');
//doTraining('T2');
//doTraining('T3');

// step -1
let t1 = doTraining();
// step-2
//t1('T1');
//t1('T2')
//t1('T3')
//t1('T4')
//t1('T5')

// returning multiple functions


function parent() {

    let f1 = () => 'My f1 function'
    
    function f2() {
        console.log('--- f2 function');
    }
    function f3() {
        console.log('--- f3 function');
    }
    return {
        'fun1': f1,
        'fun2': f2,
        'fun3': f3
    };
}


let funObj = parent();
console.log(funObj.fun1());

funObj.fun2();
funObj.fun3();


