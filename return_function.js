function evenify(num) {
  let result;
  if (num % 2 == 0) {
    result = num;
  } else {
    result = num * 2;
  }
  return result;
}
// let result1 = evenify(13);
// console.log(result1);

function evenifyAll(nums) {
  let even_array = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let result1 = evenify(num);
    even_array.push(result1);
  }
  return even_array;
}

let nums = [5, 12, 36, 89, 18, 8];
let nums_even = evenifyAll(nums);
console.log(nums_even);
