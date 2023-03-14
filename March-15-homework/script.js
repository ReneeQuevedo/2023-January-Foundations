for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
        console.log(i + "Fizz.");
    } if (i % 5 == 0) {
        console.log (i + "Buzz.");
    } if (i %3 && i % 5) {
        console.log (i + "FizzBuzz.");
    } else {
        console.log(i)
    }
}
console.log("This has ended");