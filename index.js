
// print out from 1 up to and including the number
// if the number is divisble by 3 prints Fizz
// if the number is divisible by 5 prints Buzz
// divisible by 3 && 5 print out FizzBuzz
// otherwise, prints the number
let fizzbuzz = (fizz = 3, buzz = 5, length = 100) => {
  for (let i = 0; i <= length; i++) {
    if ((i % fizz === 0) && (i % buzz === 0)) {
      console.log("FizzBuzz");
    } 
    else if (i % fizz === 0) {
      console.log("Fizz");
    } 
    else if (i % buzz === 0) {
      console.log("Buzz");
    } 
    else {
      console.log(i);
    }
  }
}

fizzbuzz(2,7,100)