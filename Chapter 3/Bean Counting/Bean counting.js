function countBs(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count += 1;
    }
  }

  return count;
}

console.log(countBs("How many Bs are there in here?"));
// -> 1

function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1;
    }
  }

  return count;
}
console.log(countChar("How are you?", "o"));
// -> 2

// Rewrite of function to take advantage of countChar
function countBs(str) {
  return countChar(str, "B");
}
console.log(countBs("How many Bs are the in here?"));
// -> 1
