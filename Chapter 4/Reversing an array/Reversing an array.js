// Reversing an array

function reverseArray(arr) {
  let newArr = [];

  for (let i = arr.length; i > 0; i--) {
    newArr.push(arr.pop());
  }

  return newArr;
}

console.log(reverseArray([1, 5, 9, 35]));

// Reversing array in place
function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 5, 9, 35]));
