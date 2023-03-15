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