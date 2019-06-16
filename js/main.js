const colorOne = document.querySelector('.color-one');
const colorTwo = document.querySelector('.color-two');
const currentBg = document.querySelector('h3');

colorOne.addEventListener('input', colorPick);
colorTwo.addEventListener('input', colorPick);

function colorPick() {
  document.querySelector('body').style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
  currentBg.textContent = `Cor número 1: ${colorOne.value} - Cor número 2: ${colorTwo.value}`
}