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
            <div class="card" id="${id}">
                    <div class="card-inner-container">
                        <div class="emoji-container">
                            <h1 class="emoji">${emoji}</h1>
                        </div>
                        <div class="card-content">
                            <h2>${name}</h2>
                            <p>${ingredients}</p>
                            <h3>${'$' + price}</h3>
                        </div>
                        <div class="add-to-cart-container">
                            <button class="add-to-cart" id="add-to-cart" data-item=${JSON.stringify(item)}>+</button>
                        </div>
                    </div>
            </div>`
    }).join('')
}

const menuContainer = document.getElementById('container')
menuContainer.innerHTML = getMenuHtml(menuArray)

let checkoutButtonDisplay = false //Varible to initialize checkout buttons visibility
let checkoutButtonCreated = false //Varible to check if the button exists

const checkoutContainer = document.getElementById('checkout-container')

menuContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-item]')
    if (button) {
        const menuItem = JSON.parse(button.dataset.item.replace(/\\"/g, '"'))
        addToCart(menuItem)
        checkoutButtonDisplay = true
    }
    if (checkoutButtonDisplay) {
        if (!checkoutButtonCreated) {
            const checkoutButtonHTML = `
            <section class="checkout-button-container">
                <button type="button" class="checkout-btn"
                 id="checkout">Checkout</button>
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
})

const cartItems = []
function addToCart(item) {
    cartItems.push(item)
    console.log(`Item ${item} added to cart.`)
    console.log(cartItems)
}

//Submit Order Modal Box
const submitModal = document.getElementById('order-submit-modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const orderForm = document.getElementById('order-form')
const submitOrder = document.getElementById('modal-submit-btn')

let customerOrderDetails = {}

function displayCheckout(checkoutClick = false) {
    console.log('Its time to checkout!')
    submitModal.style.display = 'block'
    console.log(cartItems)
    renderCart(cartItems)
}

modalCloseBtn.addEventListener('click', (e) => {
    submitModal.style.display = 'none'
})

function renderCart(cart) {
    const cartDisplayElement = document.getElementById('cart-display')
    const cartDisplayList = cart.map((element) => {
        return `<li>${element.name}</li>`
    })

    cartDisplayElement.innerHTML = `
    <ul>
        ${cartDisplayList.join('')}
    </ul>`
}

orderForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const orderFormData = new FormData(orderForm)

    customerOrderDetails = {
        customer: orderFormData.get('name'),
        email: orderFormData.get('email')
    }

    const confirmOrderTxt = document.getElementById('modal-inner')
    confirmOrderTxt.innerHTML = `<p>
    Thank you for your order! ${customerOrderDetails.customer}
    </p>`
})
