/*function start() {
  const buttonCalculator = querySelector('button#button');
  buttonCalculator.addEventListener('click', handleButtonClick);

  let inputWeight = document.querySelector('input#weight-box');
  let inputHeight = document.querySelector('input#height-box');

  inputWeight.addEventListener('input', handleButtonClick);
  inputWeight.addEventListener('input', handleButtonClick);
}

function calculatorBMI(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  let inputWeight = document.querySelector('input#weight-box');
  let inputHeight = document.querySelector('input#height-box');
  let bmiResult = document.querySelector('strong#result');

  let Weight = Number(inputWeight.value);
  let Height = Number(inputWeight.value);

  let bmi = calculatorBMI(weight, height);
  let formattedBmi = bmi.toFixed(2).replace('.', ',');

  bmiResult.textContent = formattedBmi;
}

start()
