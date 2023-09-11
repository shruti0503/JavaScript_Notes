// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
const a=2;
function func(){
    // You cannot reassign a new value to a constant.
    a=3
   return console.log(a)
    
}
console.log(a);
func();

// ----

let a;

function func(){
    // You cannot reassign a new value to a constant.
   return console.log(a)
    
}

a=2; 
func(); //output: 2

// ------
const a=[2,1,4];
function func(){
    // You cannot reassign a new value to a constant.
    // a.push(5)
   return console.log(a) // output [2,1,4,5]
    // This is because everyhting in java script happens in excution context , 
    // draw the excecution diagre
    // the first phas the memory is allocated and a is makrd as undefined ,
    // for the funcion the whole function is picked up 
}
a.push(5) 
console.log(a); // [2,1,4,5]
func();

// ---


const a=[2,1,4];
console.log(a)

function func(){
    
    a.push(5) 
   return console.log("inside the function " +a) 
   
}
func();
console.log("outside " +a); // [2,1,4,5]
a.push(7)
func();
console.log("outside after pushing 7 : "+ a)

// Output:
// [ 2, 1, 4 ]
// inside the function 2,1,4,5
// outside 2,1,4,5
// inside the function 2,1,4,5,7,5
// outside after pushing 7 : 2,1,4,5,7,5
 // Here same in case of let and var

 // -------
const a=2;
console.log(a)
function func(){
    // You cannot reassign a new value to a constant.
    let a=3
   return console.log(a)
    
}


func();
 console.log(a)
