let radius;

function areaCircle(radius) {
  const pi = 3.14;
  var area = pi * radius * radius;
  return area;
}

// This will return the function with a radius of 4
console.log(areaCircle(4));

// This will return an error becuase pi can not be accessed from here
// console.log(pi)

// This will return the variable area because it can be accessed from outside the scope of the function it was declared in
// console.log(area)

console.log();

