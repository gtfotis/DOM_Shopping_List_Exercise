'use strict';
document.addEventListener('DOMContentLoaded', function () {
    console.log('The DOM has loaded.')
    const divForList = document.querySelector('#myList');
    const generateList = document.querySelector('#generateList');

    generateList.addEventListener('click', function() {
        const userInput = document.querySelectorAll('input');
        const shoppingList = document.createElement('ul');

        userInput.forEach(function program(usersInput) {
            const userList = document.createElement('li');
            userList.innerText = userInput.value;
            shoppingList.appendChild(usersInput);
        });
        divForList.append(shoppingList);
    });
});

