// You can use the document API or object to reference html objects from your js 
// When using any of these methods, your variable is only pointing to your html code
// It would not return the content of whatever html tag had the class or id 

// Get elements by class name
// logos in this case would be a collection of all the locations on the page where the logo class name was used 
const logos = document.getElementsByClassName("logos");

// Get element by ID 
// The variable title points to where the element with the ID of title exists in our html 
// Can only grab one element and only by ID
const title = document.getElementById("Title");

// Query Selector All
// Can point to html elements directly or to classes or to both, can seperate multiple types with a comma
// Stores location of multiple elements in your DOM

// Here we point to all the paragraph elements in our DOM
const paragraphs = document.querySelectorAll("p");

// here we can narrow down from selecting all the paragraph tags, to selecting paragraph tags with a class of description
const descriptions = document.querySelectorAll("p.description");


// Query Selector
// Finds the first instance of an element that matches the query
// Can only grab one element

// This will grab the first item with the class "list-item" 
const firstListItem = document.querySelector("list-item");

