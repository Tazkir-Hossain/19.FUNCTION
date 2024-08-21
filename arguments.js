function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    let number = arguments[i];
    sum = sum + number;
  }
  return sum;
}

let result = add(2, 3, 4, 5);
console.log(result);
