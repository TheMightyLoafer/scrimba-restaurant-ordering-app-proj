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
                </div>
                <button id="add-to-cart">+</button>
            </section>`
    }).join('')
}

function checkoutButton(display) {
    if(display) {
        return`
            <section class="button">
                <button type="button">Checkout</button>
            
            </section>`
    }
}

document.getElementById('container').innerHTML = getMenuHtml(menuArray)