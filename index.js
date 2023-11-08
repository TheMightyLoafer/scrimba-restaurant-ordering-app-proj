// Import Data
import menuArray from "./data.js";

//Display menu cards
function getMenuHtml(menuArr) {
    return menuArr.map(item => {
        const {
            name,
            ingredients,
            id,
            price,
            emoji
        } = item
        return`
            <section class="card">
                <h1 class"emoji">${emoji}</h1>
                <div id="${id}">
                    <h2>${name}</h2>
                    <p>${ingredients}</p>
                    <h3>${'$' + price}</h3>
                    <button id="add-to-cart">+</button>
                </div>
            </section>`
    }).join('')
}

document.getElementById('container').innerHTML = getMenuHtml(menuArray)

//Buttons and Button functionality
const addToCartButtons = document.querySelectorAll('#add-to-cart')
const checkoutContainer = document.getElementById('checkout-container')

let buttonDisplay = false

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    buttonDisplay = true;
    if (buttonDisplay) {
        const checkoutButtonExists = checkoutContainer.querySelector('#checkout')

        if (!checkoutButtonExists) {
            const checkoutButtonHTML = `
        <section class="button">
            <button type="button" id="checkout">Checkout</button>
        </section>`
        const checkoutButtonElement = document.createElement('div')
        checkoutButtonElement.innerHTML = checkoutButtonHTML
        checkoutContainer.appendChild(checkoutButtonElement)
        }
    }
    console.log('clicked:', e.target.parentElement.id);
  });
});

//Submit Order Modal Box
const submitModal = document.getElementById('order-submit-modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const orderForm = document.getElementById('order-form')
const submitOrder = document.getElementById('modal-submit-btn')
