// here is how you declare an array in JavaScript
// Less Common way is to use the array constructor
const oldNumberArray = new Array(2, 4, 6, 8)

// Better, modern way is like this. 
const numbers = [3, 20, 10, 7];

// You can print the entire array directly to the console
console.log("Our Starting Array looks like this");
console.log(numbers);

// Using .forEach to iterate through each item in our array and print it to the console
console.log("Using .forEach, we can loop through our array and print the contents as seen below.")
numbers.forEach(num =>{
    console.log(num)
})

// Using map to create a new array we can duplicate the array 
console.log("Using map we can create a new array, below you can see the contents of numbersDuplicate")
const numbersDuplicate = numbers.map(num => num)
console.log(numbersDuplicate)

// Using map we can also transform the array
// Here we are taking each number from numbers and subtracting 4 from it
console.log("Using map we can also transform the array, below you can see our third array, numbersminus4, which is our original array, with 4 subtracted from each element.") 
const numbersminus4 = numbers.map(num => num - 4)
console.log(numbersminus4)


// Using filter we can go through our array and filter out the odds
console.log("Using filter, we can to through our array to filter out the odd numbers, leaving only the evens")
const evenNumbers = numbers.filter(num => num % 2 == 0)
console.log(evenNumbers);


