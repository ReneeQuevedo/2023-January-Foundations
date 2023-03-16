console.log('Hello again!');

var book = "Drcula";
var movie;
console.log(book);
console.log(movie);
movie= "Interview with a Vampire";
console.log(movie);

var count = "3";
var num = "2";
console.log(count + num);

console.log(5 + 8); //results in 13
console.log("5" + "8"); //results in 58

console.log("5" + 8); //results in 58 - anytime there are quotes involved it's going to read as text not an equation
console.log(5 + "8"); //results in 58

var firstName = "Dan";
var lastName = "Taylor";

console.log(firstName + " " + lastName);

var cars = ["Subaru", "Audi", "Volkswagen"]
console.log("The third car in the list is " + cars[2])
cars.push("Chevy")
cars.push("Ford")
cars.push("Honda")
cars.push("Toyota")
cars.push("Fiat")
cars.push("Buick")
cars.push("Jeep")
console.log(cars.length)
// our array ["Subaru", "Audi", "Volkswagen", "Chevy", "Ford", "Honda", "Toyota", "Fiat", "Buick", "Jeep"]
console.log(cars)
console.log(cars[cars.length-1]);
cars.pop();
console.log(cars)
console.log(cars.length)
console.log(cars[cars.length-1]);
cars.splice(2,3); // 2 is where the splice starts, 3 is how many to splice after
console.log(cars);
console.log(cars.length);

var student = {
    firstName: "Henry",
    lastName: "Jackson",
    id: 12345,
    courses: [
        {
            class: "Full Stack Java",
            instructor: {
                firstName: "Steve",
                lastName: "Wozniak"
            },
            gradePercentage: 97
        },
        {
            class: "Calculus",
            instructor: {
                firstName: "Bill",
                lastName: "Gates"
            },
            gradePercentage: 86
        }
    ]
}

console.log("My name is " + student.firstName + ' ' + student.lastName + ', and I am taking ' + student.courses.length + ' courses.')
//creates = My name is Henry Jackson, and I am taking 2 courses.
console.log('My first course is ' + student.courses[0].class + ', taught buy ' + student.courses[0].instructor.firstName + ' ' + student.courses[0].instructor.lastName + '.')
//creates= My first course is Full Stack Java, taught buy Steve Wozniak.
console.log('I am getting a ' + student.courses[0].gradePercentage + ' in ' + student.courses[0].class + '.');
//creates= I am getting a 97 in Full Stack Java.

var zombies = 8;
if (zombies > 10) {
    console.log('AAARRGGGGG! ZOMBIES!!!');
} else if (zombies > 5) {
    console.log('Gotta stay away from those zombies');
} else {
    console.log('Not a lot of zombies today.');
}

var apples = 15;
if (apples > 3) {
    console.log("Let's make tarts");
} else if (apples > 10) {
    console.log('Let us make a pie! We can use the "Betty Crocker" cookbook!');
}

// start of March 11th Homework
var pens;
pens = 6;

var shoe;
shoe = 1;

var bookBag;
bookBag = 2;

var book = "Harry Potter";
var song = "Walking on Sunshine";
var podcast = "The Daily";

const company = {
    name: "Fisherman's Delight",
    address: {
        streetAddress: "34 Walliby Way",
        city: "San Diego",
        state: "CA",
        zip: "45123"
    },
    phoneNumber: "204-867-5342",
    employees: 280,
}
console.log("The name of the company is" + " " + company.name + ". It is located at" + company.address.streetAdress + ' ' + company.address.city + ', ' + company.address.state + ' ' + company.address.zip + ' ' + 'and its phone number is ' + company.phoneNumber + '. ' + 'The company has' + ' ' + company.employees + ' employees.')
// console.log('The name of the company is ' + company.name + '. ' + 'It is located at ' + company.address.streetAddress + ' ' + company.address.city + ' ' + company.address.state + ', ' + company.address.zip + ' and its phone number is ' + company.phoneNumber + '. ' + 'The comapny has ' + company.employees + ' employees')

var foods = ["Burger", "Fries", "Sandwich", "Tots", "Tacos"];
foods.pop(4);
console.log(foods);
foods.push("Salad")
foods.push("Nachos")
foods.push("Cookies")
console.log(foods.length)
console.log(foods)
foods.splice(1, 4);

var testScore = 82;
if (testScore > 99) {
    console.log("You aced it!");
} else if (testScore >= 70) {
    console.log("You passed!");
} else {
    console.log("I'm sorry you didn't pass.");
}

//javascript loops practice 
for (var i = 1; i <= 10; i++) {
    console.log("i is now " + i);
}
console.log("the loop has ended");

// // need rest of code!!
// for (var i = 10; i >= 1; i--) {
//     console.log("i is now " + i);
// }

// for (var i = 3; i < 22; i+3) {
//     console.log("i is now " + i);
// }

var cars = ["Toyota", "Nissan", "Honda", "Subaru"];
for (var i = 0; i < cars.length; i++) {
    console.log("Car " + (i + 1) + " is a " + cars[i]);
}
console.log("That's all the cars.")


for (var i = 1; i <= 20; i++) {
	if (i % 2 == 0) {
        console.log(i + " is even.");
    } else {
        console.log (i + " is odd.");
    }
}
console.log("That's all folks!");

var numMonkeys = 8;
while (numMonkeys > 0) {
    console.log(numMonkeys + " little monkeys, sitting on a bed.");
    numMonkeys--;
}
console.log("no more monkies");

var numBooks = 11;
while (numBooks < 10) {
    console.log("Number of books is " + numBooks);
    numBooks++;
}
console.log("While loop ended");

//do while loops example - do while loop will execute atleast one time even if the condition is NOT true. A while loop might never run.

var numBooks = 11;
do {
    console.log("Number of books is " + numBooks);
} while (numBooks < 10);
console.log("Do while loop ended.")

//in-class March 15th js functions

function printHelloWorld() {
    console.log("Hello World!");
}

printHelloWorld(); //calls the function

function add3Plus5() {
    var total = 3+5;
    console.log("Total is " + total);
}
add3Plus5();

function addTwoNumbers(num1, num2) {
    var total = num1 + num2;
    console.log("Total is " + total);
    return total;
}

addTwoNumbers(7, 12);

var price = addTwoNumbers(7, 12);
console.log("The price is " + price);

var houseArea;
var housePerimeter;

function getAreaOfHouse(length, width) {
    var area = length * width;
    return area;
}

function getPerimeterOfHouse(length, width) {
    var perimeter = (2* length) + (2 * width);
    return perimeter;
}

var houseLength = 30;
var houseWidth = 15;

houseArea = getAreaOfHouse(houseLength, houseWidth);
housePerimeter = getPerimeterOfHouse(houseLength, houseWidth);

console.log(`My house is ${houseLength} feet by ${houseWidth}
feet.It has an area of ${houseArea} square feet and a perimeter of 
${housePerimeter} feet.`);
// or you can type it out the old way [console.log("my house is " + houseLength + " feet by "...)]


// var greeting = "Hello"; //variable is outside
// function sayGreeting() {
//     console.log(greeting);
// }
// sayGreeting();
// console.log(greeting);
// //can call the variable greeting because it is OUTSIDE of the function.


// function sayGoodbye() {
//     var goodBye = "So long!"; //varible is inside
//     console.log(goodBye);
// }

// sayGoodbye();
// console.log(goodBye);
// //could NOT call the variable greeting because it is INSIDE the function.

var total = 3;
function getTotal() {
    total = 5;
    console.log("Total in function = " + total);
}
getTotal();
console.log("Total outside function = " + total);

function getMeasurements(length, width) {
    if(length > 40 && width > 20) {
        var perimeter = 2 * length + 2 * width;
    } else {
        console.log("You have too small a house to care about the perimeter.")
    }
    console.log("the perimeter of you house is " + perimeter + "feet.");
}

getMeasurements(50, 50);

// let catName = "Bob";
// const dogName = "Jerry"

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number){
    console.log("The number was " + number);
    number *= number;
    console.log("But now it's " + number);
});
// Results in: he number was 1 But now it's 1...The number was 2 But now it's 4...

numbers.forEach((number) => {
    console.log("The number was " + number);
    number *= number;
    console.log("But now it's " + number);
})
// Results in the same: The number was 1 But now it's 1...The number was 2 But now it's 4...

