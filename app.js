'use strict';

const billAmount = document.querySelector('.form__input-bill-amount');
const percentageTip = document.querySelector('.form__input-percentage-tip');

const tipAmountEL = document.querySelector('.form__tip-amount');
const totalAmountEL = document.querySelector('.form__total');

const btn = document.querySelector('.form__button');
const resetBtn = document.querySelector('.reset');

const bills = [];
const tips = [];

function calculateTip(bill, perc) {
  return (bill / 100) * perc;
}

function addArrElement(arrOne, arrTwo) {
  // using spread syntax to pass ArrOne array and mapping trough arrOne, adding element + idx of arrTwo;
  const totals = [...arrOne].map((element, idx) => element + arrTwo[idx]);
  // Using forEach to insert each element to the DOM;
  totals.forEach((el) => {
    totalAmountEL.textContent = el;
  });
  // Return totals array
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

resetBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  billAmount.value = '';
  percentageTip.value = '';
  tipAmountEL.textContent = '';
  totalAmountEL.textContent = '';
});
