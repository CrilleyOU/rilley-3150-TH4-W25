// JavaScript Object Literal
// Very much like key-value pairs, it is a way to store data or functions
const student = {
    firstName: "Chris",
    lastName: "Rilley",
    // You can stick object literals inside of object literals
    // Nested object literals 
    address: {
        street: "3883 Main Street",
        state: "Michigan",
    },
    // Can be used to store functions
    greeting: function () {
        return `Hello my name is ${this.firstName} ${this.lastName}`;
    },
};
// Object Destructuring -- JS Object Literal -- The purpose of this is to easily access variables from our object literal
const { firstName, lastName } = student;

// We can now reference those variables directly
console.log(firstName);

// If we don't deconstruct, we cannot reference the variable directly
// The below code will throw an error as we have not deconstructed address nested object
// console.log(address.street);

// If we wanted to access that element without destructuring, we would have to specify that we are retrieving it from our student object
console.log(student.address.street);

// We can also call our function from our JS object literal
console.log(student.greeting());

// We can only call non-deconstructed variables by specifying we are accessing from our object itself
console.log(student.address.street);

// JSON Object
// In JS, the entire thing is a string, if you were pulling a JSON object from an API, i.e api.weather.gov
// Every key must be in double quotes, unlike object literals
const studentJSON =
  '{"firstName": "Chris", "lastName": "Rilley", "address": {"street": "3881 Main Street","state": "Michigan"}}';

// In order to use this object, you must first parse it this converts it into an object literal
const studentParsed = JSON.parse(studentJSON);

// Once its been parsed, we can access the elements the same as we would an Object Literal
console.log(studentParsed.firstName);

// We can also deconstruct the object now that it has been parsed
// Here we will deconstruct the nested object from our parsed JSON object
const {street, state} = studentParsed.address;

// Overall JSON objects are typically used for pulling data from a remote server in a usable format
// JavaScript Object Literals are what is actually being used within your JS code

