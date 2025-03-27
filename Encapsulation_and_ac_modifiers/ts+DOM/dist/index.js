"use strict";
const userFrom = document.querySelector('.user-form');
const userName = document.querySelector('#name');
userFrom.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value
    };
    console.log(data);
});
