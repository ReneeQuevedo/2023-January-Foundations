for (var i = 1; i <= 100; i++) {
if (i %3 && i % 5) {
        console.log ("FizzBuzz.");
    } else if (i % 3 == 0) {
        console.log("Fizz.");
    } else if (i % 5 == 0) {
        console.log ("Buzz.");
    } else {
        console.log(i);
    }
}
console.log(i)

console.log("This has ended");


// in class 
//print the number 1 to 100 but if the number is divisible by 3 print > Fizz and if the number is divisible by 5 > buzz and if it is divisible by both 3 & 5 > Fizzbuzz

for (var i = 1; i <= 100; i++) {
    if ( i % 3 ==0) {
        if (i% 5 ==0) {
            console.log("FizzBuzz")
        }
        else console.log ("Fizz");
    } else if (i % 5 ==0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// //in-class March 15th js functions

// function printHelloWorld() {
//     console.log("Hello World!");
// }

// printHelloWorld(); //calls the function

// function add3Plus5() {
//     var total = 3+5;
//     console.log("Total is " + total);
// }
// add3Plus5();

// function addTwoNumbers(num1, num2) {
//     var total = num1 + num2;
//     console.log("Total is " + total);
//     return total;
// }

// addTwoNumbers(7, 12);

// var price = addTwoNumbers(7, 12);
// console.log("The price is " + price);

// var houseArea;
// var housePerimeter;

// function getAreaOfHouse(length, width) {
//     var area = length * width;
//     return area;
// }

// function getPerimeterOfHouse(length, width) {
//     var perimeter = (2* length) + (2 * width);
//     return perimeter;
// }

// var houseLength = 30;
// var houseWidth = 15;

// houseArea = getAreaOfHouse(houseLength, houseWidth);
// housePerimeter = getPerimeterOfHouse(houseLength, houseWidth);

// console.log(`My house is ${houseLength} feet by ${houseWidth}
// feet.It has an area of ${houseArea} square feet and a perimeter of 
// ${housePerimeter} feet.`);

// // or you can type it out the old way [console.log("my house is " + houseLength + " feet by "...)]

// var greeting = "Hello";
// function sayGreeting() {
//     console.log(greeting);
// }
// sayGreeting();
// console.log(greeting);

// function sayGoodbye() {
//     var goodBye = "So long!";
//     console.log(goodBye);
// }

// sayGoodbye();
// console.log(goodBye);

//moved all commented out code to to the in-class working file I had already had started - too afraid to delete. 
