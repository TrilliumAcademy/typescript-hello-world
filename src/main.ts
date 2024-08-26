// This line is here so that TypeScript doesn't treat everything in this file as being
// part of the same code as in "fixme.ts". This way, we can define the same variables
export {};

// Just print "Hello, world!" to the console.
console.log("Hello, world!");

// Define a function to do something with a string, and return a new string.
function doSomething(value: string): string {
  return value + " is a really cool language!";
}

// Call our function and assign the return value to a variable called 'output'.
// Note that `const` is used here, since we never change the value of 'output' after assigning it.
const output = doSomething("TypeScript");

// Print the value of 'output' to the console.
console.log(output);

// Create an array of possible pets.
let pets = ["cat", "dog", "capybara", "anaconda", "walrus", "birb"];

// We're going to filter the pets array to only include pets with 4 characters or less.

// First, define a function that takes a string and returns 'true' if we should keep the
// string in the array, or 'false' if we should remove it.
function filterPet(pet: string): boolean {
  return pet.length <= 4;
}

// Overwrite the 'pets' array with a new array that only includes the pets that pass the filter.
pets = pets.filter(filterPet);

// Note that we can insert the value of a TypeScript expression directly into a string
// using the backtick character (`) and the ${} syntax.
console.log(`The filtered pets are: ${pets}`);

// This can be used with any expression!
console.log(`The value of 2 + 2 is ${2 + 2}.`);

// Rather than writing a separate filter function, we can pass in a "lambda function" directly.
// A lambda function is just a function without a name. For example:

const bestPets = pets.filter((pet: string) => {
  return pet == "dog";
});
console.log(`The best pets are: ${bestPets}`);

// Or, even shorter:
const worstPets = pets.filter((pet: string) => pet == "cat");
console.log(`The worst pets are: ${worstPets}`);

// In TypeScript, an object is just a collection of key-value pairs.

// Let's create two student objects.
const studentOne = {
  name: "Alice",
  grade: 11,
  favoriteSubject: "Math",
  pets: ["Harry", "Walter"],
};

const studentTwo = {
  name: "Noah",
  grade: 10,
  favoriteSubject: "Art",
  pets: ["Turbo", "Slick"],
};

// Here's a list of all the students.
const allStudents = [studentOne, studentTwo];

// Say a new student has joined the school. Let's add them to the list.
const newStudent = {
  name: "Olivia",
  grade: 12,
  favoriteSubject: "Biology",
  pets: ["Fluffy", "Spot"],
};

// Note that although 'allStudents' is a const, we can still add and remove elements to the array!
// This is because the array itself is not changing, only the elements inside it.
allStudents.push(newStudent);

// Trying to print out the students list directly doesn't give us exactly what we want.
// You should see:
//     "All of the students: [object Object],[object Object],[object Object]"
// This is because TypeScript doesn't know how to convert an arbitrary object to a string.
console.log(`All of the students: ${allStudents}`);

// Instead, you can try this, which will pretty-print the array for you.
console.log(allStudents);

// Or, you can use the built-in JSON.stringify function to convert the array to a string.
console.log(`All of the students as JSON: ${JSON.stringify(allStudents)}`);

// The output of this is kind of ugly, though, so we can use extra arguments to JSON.stringify
// to make it prettier.
console.log(
  `All of the students as JSON (pretty): ${JSON.stringify(allStudents, null, 2)}`
);

// In TypeScript, all objects have a type, such as "string", "number", or "object". The type is
// either explicitly provided, or in many cases can be inferred by the compiler.

// Here, we explicitly declare myString to be a string.
const myString: string = "Barbecue bacon cheeseburger";

// But the compiler can also figure it out in many cases, so you don't always need to be explicit.
const alsoMyString = "Nacho cheese fries";

// If you try to write code that uses types incorrectly, the TypeScript compiler will give you
// an error.

let someString = "Turnip cake";
console.log(
  `The value of someString is: ${someString}, and its type is ${typeof someString}.`
);

// The following line won't compile, because the compiler recognizes that you can't assign a
// number to a variable of type string. (So, it's commented out.)
// someString = 42;

// Likewise, we can't assign a new value to a variable previously declared as 'const'.
// alsoMyString = "Poutine";

// You often have a situation where you have a variable that is not yet initialized.

let maybeUninitializedString: string;

// TypeScript won't let us reference "uninitializedString" until it's been initialized, so the
// following line will cause a compiler error.
// console.log(`The value of maybeUninitializedString is: ${maybeUninitializedString}`);

// We can fix this by initializing the variable.
maybeUninitializedString = "Peking duck";
console.log(
  `The value of maybeUninitializedString is: ${maybeUninitializedString}`
);

// What if you want to have a variable that is initially uninitialized, but you still want to
// access it before assignment? In this case, we use the special "undefined" value, which means
// that the variable has not been assigned any value.

// This simply means that the variable is either a string OR "undefined".
let possiblyUndefinedString: string | undefined;

console.log(
  `The value of possiblyUndefinedString is: ${possiblyUndefinedString} and its type is ${typeof possiblyUndefinedString}.`
);

// After assignment, the variable is no longer undefined.
possiblyUndefinedString = "Eggroll";
console.log(
  `The value of possiblyUndefinedString is: ${possiblyUndefinedString} and its type is ${typeof possiblyUndefinedString}.`
);

// Likewise, we can have a variable that takes on either a string or a number.
let stringOrNumber: string | number = "I'm a string";

console.log(
  `The value of stringOrNumber is: ${stringOrNumber} and its type is ${typeof stringOrNumber}.`
);

// Let's assign a number to it. Unlike the example above, this is not an error, because we told
// TypeScript that the variable can be a string OR a number.
stringOrNumber = 42;

// Note that the value and the type of the variable have changed.
console.log(
  `The value of stringOrNumber is: ${stringOrNumber} and its type is ${typeof stringOrNumber}.`
);

// An Error is a special type in TypeScript that represents a runtime error. You can throw an
// error from your code using the 'throw' keyword, and use a 'try/catch' block to catch and
// handle the error in the right place. Here is an example.

// This function only works if the number provided is even. If it's odd, it throws an error.
function half(x: number): number {
  if (x % 2 != 0) {
    throw new Error("x must be even");
  }
  return x / 2;
}

// We should get back 44 as the result.
console.log(`Calling half(88) returns ${half(88)}`);

// Now, the problem with Errors is that the must be handled somewhere in your code, or else
// your program will crash. If we call half with an odd number, the error will cause the program
// to crash with the message "Error: x must be even".

// console.log(`Calling half(27) returns ${half(27)}`);
// console.log("This line will never be reached, since we got an error.");

// Instead, we want to *catch* the error and handle it gracefully.
try {
  console.log(`Calling half(27) returns ${half(27)}`);
  console.log(
    "This line will be reached, since the error causes us to jump to the 'catch' block."
  );
} catch (e) {
  console.error("Caught an error:", e);
}

console.log("This line will be reached, since we caught the error and handled it.");

console.log("🎉 Congrats! Your TypeScript environment seems to be working.");

