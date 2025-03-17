// In this scenario, we use let to declare our variable
// Let allows you to create mutable variables that can be accessed within a block scope
// For example if this was declared inside a function, it would not be accessible from outside the function
// and we can reassign this variable at any point within that scope
let myVariable = 2;

// In this scenario, we use var to declare our variable
// This is not the recommended method of variable declaration, as these variables do not have a block scope
// They are limited to inside a function if declared there, but blocks like if statements, for loops, and while loops 
// allow for var variables to be accessed from beyond them
var myVARiable = 2;


// In this scenario, we use const to declare our variable
// Like let, variables declared using const have a block scope
// Unlike let and var, variables declared using const cannot be reassigned, and attempting to do so will throw an error
const myVaRiAble = 2;

// Function Scope Demonstration
// Here we declare a variable using let
// This variable can be accessed from anywhere in this function
let circleRadius = 10;

function areaCircle(radius) {
    // Here we declare a constant variable PI
    // pi is now immutable from within this function and cannot be accessed from outside
    const pi = 3.14;
    // Here we declare our area variable using var
    // Since it is defined in our function , it is limited to this functions scope
    var area = pi * radius * radius;
    return area;
}

// We cannot access our const pi and var area from outside the function scope
// The same would occur if we were to declare area using let
// These two lines will throw an error
// console.log(pi);
// console.log(area)

// Block Scope Demonstration
// Here we will create a code block using an if statement with the condition just as true
if (true){
    let x = "Declared using let";
    const y = "Declared using const";
    var z = "Declared using var"
}

// We cannot access our x and y variables from out here as these have a block scope
// These two lines will throw an error 
console.log(x);
console.log(y);

// Var, however, can be accessed from outside this block scope
// The below code will print "Declared using var" to the console
console.log(z);


