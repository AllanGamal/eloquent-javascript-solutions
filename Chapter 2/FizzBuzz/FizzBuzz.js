for (let i = 1; i <= 100; i++) {
  // Numbers divisible by 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

    // Numbers divisible by 3
  } else if (i % 3 === 0) {
    console.log("Fizz");

    // Numbers divisible by 5
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
