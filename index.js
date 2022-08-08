function start() {
  const buttonCalculator = querySelector('button#button');
  buttonCalculator.addEventListener('click', handleButtonClick);
}

function calculatorBMI(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  let box = document.querySelectorAll('input#box');
}

start();
