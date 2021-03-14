'use strict';

const billAmount = document.querySelector('.form__input-bill-amount');
const percentageTip = document.querySelector('.form__input-percentage-tip');

const tipAmountEL = document.querySelector('.form__tip-amount');
const totalAmountEL = document.querySelector('.form__total');

const btn = document.querySelector('.form__button');

// Get bill amount value from the dom
// Check bill amount for wrong input?
// Get percentage tip from the dom
// Check percentage tip for wrong input?
// Create function to calculate x amount / percentage tip (the calculation for tip amount)
// Percentage tip input needs to be converted from a whole number to a decimal;

const bills = [];
const tips = [];

function calculateTip(bill, perc) {
  return (bill / 100) * perc;
}

function addArrElement(arrOne, arrTwo) {
  const totals = [...arrOne].map((e, i) => e + arrTwo[i]);
  totals.forEach((el) => {
    totalAmountEL.textContent = el;
  });
  return totals;
}

btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  const tip = calculateTip(+billAmount.value, +percentageTip.value);
  bills.push(+billAmount.value);
  tips.push(tip);
  addArrElement(bills, tips);
  tipAmountEL.textContent = tip;
});
