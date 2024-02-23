"use strict";
let result;
const ratingStart = document.querySelector('#rating-start');
const ratingEnd = document.querySelector('#rating-end');
const resultText = document.querySelector('#result');
const selectRating = (id) => {
    const element = document.querySelector(id);
    const elementValue = element.dataset.value;
    element.className = 'active';
    result = Number(elementValue);
};
const submit = () => {
    ratingStart.className = 'inactive';
    ratingEnd.className = 'active';
    resultText.textContent = `You selected ${result} out of 5`;
};
