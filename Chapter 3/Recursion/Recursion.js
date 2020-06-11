function isEven(x) {
  // Making the function work with a negative number as a parameter
  if (x < 0) {
    x *= -1;
  }

  if (x === 0) {
    result = true;
  } else if (x === 1) {
    result = false;

    // Feed the argument to the isEven function til any of the two parametres is met
  } else {
    x += -2;
    isEven(x);
  }
  return result;
}

console.log(isEven(-2));
