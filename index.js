import menuArray from "./data.js";

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
