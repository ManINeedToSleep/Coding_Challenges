// DOM Elements
let counter = parseInt(localStorage.getItem('counter')) || 0;
const counterDisplay = document.getElementById('counter');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');
const targetInput = document.getElementById('targetInput');
const targetValueDisplay = document.getElementById('targetValue');

// Initialize counter display
counterDisplay.textContent = counter;

// Track target value
let targetValue = Infinity;
targetInput.addEventListener('input', (e) => {
  targetValue = parseInt(e.target.value) || Infinity;
  targetValueDisplay.textContent = targetValue === Infinity ? '∞' : targetValue;
});

// Increment counter on button click
clickBtn.addEventListener('click', () => {
  if (counter < targetValue) {
    counter++;
    counterDisplay.textContent = counter;
    localStorage.setItem('counter', counter);

    // Trigger pop animation
    counterDisplay.classList.remove('pop-animation');
    void counterDisplay.offsetWidth; // Force reflow
    counterDisplay.classList.add('pop-animation');
  }
});

// Reset counter
resetBtn.addEventListener('click', () => {
  counter = 0;
  localStorage.setItem('counter', counter);
  counterDisplay.textContent = counter;
  targetInput.value = '';
  targetValue = Infinity;
  targetValueDisplay.textContent = '∞';
});
