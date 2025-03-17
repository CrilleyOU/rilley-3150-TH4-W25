// Arrow Functions provide a concise way to write a function in javascript 
// input --> function body --> output
let multiply = (x, y) => {return x * y};

// Calling the function is the same between the two methods of creating a function
console.log(multiply(2,5));

// Traditionally you would use the function keyword
function add(x, y){
    return x + y;
}

console.log(add())