// A list

// Array to list
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

console.log(arrayToList([1, 2, 3]));

// List to array
function listToArray(list) {
  let array = [];

  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

let list = arrayToList([1, 2, 3]);
console.log(listToArray(list));
