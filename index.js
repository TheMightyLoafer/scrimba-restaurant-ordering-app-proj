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
        return `
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

let checkoutButtonDisplay = false //Varible to initialize checkout buttons visibility
let checkoutButtonCreated = false //Varible to check if the button exists

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        checkoutButtonDisplay = true
        if (checkoutButtonDisplay) {
            if (!checkoutButtonCreated) {
                const checkoutButtonHTML = `
        <section class="button">
            <button type="button" id="checkout">Checkout</button>
        </section>`
                const checkoutButtonElement = document.createElement('div')
                checkoutButtonElement.innerHTML = checkoutButtonHTML
                checkoutContainer.appendChild(checkoutButtonElement)
                checkoutButtonCreated = true
            }
            // Now that the checkout button exists, it can be used

            const checkoutButton = document.getElementById('checkout')
            checkoutButton.addEventListener('click', () => {
                console.log('clicked')
                displayCheckout(true)
            })
        }
        console.log('clicked:', e.target.parentElement.id);
    });
});

//Submit Order Modal Box
const submitModal = document.getElementById('order-submit-modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const orderForm = document.getElementById('order-form')
const submitOrder = document.getElementById('modal-submit-btn')

function displayCheckout(checkoutClick = false) {
    console.log('Its time to checkout!')
    submitModal.style.display = 'block'
}

