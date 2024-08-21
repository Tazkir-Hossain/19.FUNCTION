function explainCallback(name, age, task) {
  console.log(`Hello:${name}`);
  console.log(`Your Age:${age}`);
  task();
}

function washHand() {
  console.log(`Wash your hand`);
}
function takeShower() {
  console.log(`Take your Shower`);
}

explainCallback("Rahim", 18, washHand);
explainCallback("Karim", 24, takeShower);
