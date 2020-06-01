console.log('-- data types --');

/*  

Data Types
------------
    primitive types
        1. number
        2. boolean
        3. string
        4. undefined
*/

//   1. number
//---------------------
var a=100;


// 2. boolean

var b=true;

// 3. string

var s1='abc';
var s2="Xyz";

var trainer='James'
var sub='Angular'

var s3=trainer+'is  teaching '+sub;

// note - use back tik operator  - allows multiline  statemnets

let s4=`
Trainer name is  ${trainer}
And ${trainer} is teaching ${sub}
`

var htmlTeample=`
    <div>
        <h1>${trainer} is teaching ${sub}</h1>
        <hr/>
        <button>Click Me </button>
    </div>
`
//var s5="<button type='submit' style='{color:'red'}' onclick='alert('Hi')> Click Here</button>"
var s6=`
<button type='submit' onClick=alert('Hi')>
Click Me
</button>
`
let rootDiv=document.querySelector('#root');

rootDiv.innerHTML=s6



// 4.undefined

var ename;

