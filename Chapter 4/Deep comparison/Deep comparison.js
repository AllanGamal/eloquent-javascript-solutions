// Deep comparison

function deepEqual(a, b) {
  if (a === b) {
    return true;
  } else if (
    typeof a === "object" &&
    typeof b === "object" &&
    (a !== null || b !== null)
  ) {
    let arrA = Object.keys(a);
    let arrB = Object.keys(b);

    // Comparing number of keys
    if (arrA.length === arrB.length) {
      // Comparing key values
      for (keys of arrA) {
        if (a[keys] === b[keys]) {
          result = true;
        } else {
          result = false;
          break;
        }
      }
      return result;
    }
  } else {
    return false;
  }
}

let obj1 = { x: 0, y: 0, z: 2 };
let obj2 = { x: 0, y: 0, z: 2 };
console.log(deepEqual(obj1, obj2));
