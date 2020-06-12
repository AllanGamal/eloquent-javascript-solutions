// The sum of a range

// Range function
function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(range(1, 10));

// Sum function
function sum(arr) {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    count += i;
  }
  return count;
}

console.log(sum(range(1, 10)));

// Bonus
function rangeBonus(start, end, step = 1) {
  let arr = [];

  if (start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else if (start > end && step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  } else {
    arr.push("Thats not going to work");
  }

  return arr;
}
console.log(rangeBonus(1, 10, 2));
console.log(rangeBonus(5, 2, -1));
