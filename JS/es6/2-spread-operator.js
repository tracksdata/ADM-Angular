
let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9];

let arr3 = [...arr1, 4, 5, 6, ...arr2];

let arr = [40, 30, 20, 70, 10]

let maxVal = Math.max(...arr);

let o1 = {
    x: 10,
    y: 20
}

let o2 = {
    z: 30,
    x: 1
}

let o3 = { ...o1, ...o2 }

let o4 = Object.assign({ a1: 100, b1: 200 }, o2, o3);

let todos = [
    { body: 'play', completed: true },
    { body: 'sleep', completed: false },
    { body: 'study', completed: true },
    { body: 'eat', completed: false },
    { body: 'drive', completed: true }
]

// task1
// copy all todos into new array whose statis is true

// how to iterate
//for(let index in todos){
// console.log(todos[index]); 
//}

//for(let todo of todos){
// console.log(todo);   
//}

let completed = [];
todos.map((todo, index) => {
    //console.log(index  + ' :  '+ JSON.stringify(todo));
    //console.log(todo);
    completed=todo.completed ?{ ...completed,todo} : {};
})



