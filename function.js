function evenify(num) {
  if (num % 2 == 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
// let nums = [5, 12, 89, 6, 4];
// for (let i = 0; i < nums.length; i++) {
//   const number = nums[i];
//   //console.log(num);
//   evenify(number);
// }

// const ages = [23, 29, 38, 40, 45, 65];
// for (let i = 0; i < ages.length; i++) {
//   let age = ages[i];
//   evenify(age);
// }

const numbers = [5, 8, 10, 45, 68, 79, 86, 99, 100];
function evenifyAll(p) {
  for (let j = 0; j < numbers.length; j++) {
    let justify = numbers[j];
    evenify(justify);
  }
}
evenifyAll(numbers);
