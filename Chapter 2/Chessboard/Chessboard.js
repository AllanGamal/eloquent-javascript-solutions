let size = 8;
let row = "";

// Loop for every row
for (let y = 0; y < size; y++) {
  // Loop for 1 row
  for (let i = 0; i < size; i++) {
    if ((y + i) % 2 === 0) {
      row += "#";
    } else {
      row += " ";
    }
  }
  row += "\n";
}
console.log(row);
