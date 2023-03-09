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