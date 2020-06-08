//console.log('-- this operatoer ');
// this operator / function binding

/**
 *  function binding
 *  --------------------
 *  => to execute any function by an object, we must do function binding
 * 
 *   types
 *  => static
 *  => dynamic
 */


// 1. static binding
//---------------------

function isEven(inp) {
    console.log(this); // current object 
    let out = inp % 2 === 0;
    return out;
}
//console.log(isEven(10));



//sayName(); // calling on which object? :  -> blank name

//let p1 = { name: 'Prashanth', sayName: sayName } // static binding
//let p2 = { name: 'James', sayName: sayName } //
//let p3 = { name: 'Bucky', sayName: sayName } //

//p1.sayName(); // Prashanth
//p2.sayName(); // James
//p3.sayName(); // Bucky


function sayName() {
    console.log('name is ' + this.name);
}

let p1 = {
    name: 'Praveen',
    sayName: sayName
}

p1.sayName();

let p2 = {
    name: 'Ria',
    sayName: function () {
        console.log('my name is ' + this.name); 
    }
}

p2.sayName();

//-----------------------
//
//-----------------------
//let name='ria rose'
class Person {
    constructor(name){ // by default
        this.name = name;
    }

    /*setName(name){  //? 
        this.name=name
    }
    */

    sayName() {
        //let name='bla'
        console.log('I am '+this.name);
    }
}

let p3=new Person('abc');
//p3.setName(); //?

let p4=new Person('Rose')
//p3.sayName(); //? 
//p3.setName('xyz');
p3.sayName(); //? 
//p4.sayName();

//-----------------------
// cts-academy
//-----------------------

/*
function doTraining(sub,duration,location) {
   // console.log('trainer '+this.name+' teaching '+sub+ 'for '+duration+' hours at '+location);
   console.log(`trainer ${this.name}: teaching ${sub} for ${duration} hours at ${location}`);
}
*/

function doAssignment(pro){
    console.log(`trainer ${this.name} is working on ${pro}`);
    
}


//doTraining('Angular',20,'Chennai'); // 
// way -1
//let trainer={name:'Praveen',doTraining:doTraining};
//trainer.doTraining('Angular',20,'Chennai');

// way- 2

//let trainer={name:'Ram'}

//trainer.doTraining=doTraining;
//trainer.name='James'
//trainer.doTraining('Java',8,'Delhi');
//trainer.doAssignment=doAssignment;
//trainer.doAssignment('Pedoblem on java')

// -------------
// vendore module
//--------------

let trainer={"name":'Praveen',"exp":13,"sub":'Java Script'}
Object.preventExtensions(trainer);

function doTraining(sub,duration,location) {
    console.log(`${this.name} having ${this.exp} years of experince`);
    console.log(`trainer ${this.name}: teaching ${sub} for ${duration} hours at ${location}`);
    document.title='my tittle-abc'
    document.write('body data')
    document.querySelector('#root').innerHTML=`trainer ${this.name}: teaching ${sub} for ${duration} hours at ${location}`
  
}

//----------------------------------------
// b. dynamic binding
//--------------------------------------

// A. eager invocation
// way - 1 : call
//doTraining.call(trainer,'React Js',20,'Pune');
// way-2
//doTraining.apply(trainer,['PHP',150,'Kolkata'])

// B. lazy invocation (on evets)

// way - 3 : bind

  let f1=doTraining.bind(trainer);
  f1('Angular',50,'Pune');

  /**
   *    // static vs dynamic function binding
        //------------------------------------
        => to keep function on object for-ever ==> static binding
        => just function by any object ==> dynamic
   * 
   */

  
  







