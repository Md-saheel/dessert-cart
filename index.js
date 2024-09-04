import { desserts } from './data/data.js';
import { cartItems } from './data/data.js';
let dessertsHTML = '';
let cartHTML = '';
function renderDesserts() {
  desserts.forEach((dessert) => {
    dessertsHTML += `<section class="dessert">
        <img src="${dessert.image.desktop}" class="dessert-img" />
        <br/><section class="add-cart"><button class="remove-btn" data-dessert-id="${
          dessert.id
        }">-</button>
        <input class="cart-value" value=${0}></input><button class="add-btn" data-dessert-id="${
      dessert.id
    }">+</button>
        </section>
        <p class="category">${dessert.category}</p>
        <p class="dessert-name">${dessert.name}</p>
        <p class="price">$${dessert.price}</p>
        <button class="add-to-cart" data-dessert-id="${
          dessert.id
        }" >update cart</button>
      </section>`;
  });
  document.querySelector('.js-menu').innerHTML = dessertsHTML;
}

renderDesserts();

function renderCart() {
  let cartQuantity = 0;
  let cartElements = '';
  let orderTotal = 0;

  cartItems.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    desserts.forEach((dessert) => {
      if (dessert.id === cartItem.id && cartItem.quantity > 0) {
        orderTotal += cartItem.quantity * dessert.price;
        cartElements += `<p>${dessert.name}</p>
        <p>${cartItem.quantity}x   @$${dessert.price}  = $${
          dessert.price * cartItem.quantity
        }</p>`;
      }
    });
  });

  cartHTML =
    `<section class="cart"> <h2>Your Cart(${
      cartQuantity < 0 ? 0 : cartQuantity
    })</h2>
         ` +
    cartElements +
    `<hr>Order Total = $${orderTotal}<hr></section>`;

  document.querySelector('.cart-section').innerHTML = cartHTML;
}
function saveToStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
saveToStorage();
renderCart();
document.querySelectorAll('.add-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const cartElement = button.previousElementSibling;
    cartElement.value++;
  });
});

document.querySelectorAll('.remove-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const cartElement = button.nextElementSibling;
    if (cartElement.value > 0) {
      cartElement.value--;
    }
  });
});

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const { dessertId } = button.dataset;
    const inputElement = button.parentElement.querySelector('.add-cart');
    const itemQuantity = inputElement.querySelector('.cart-value').value;
    cartItems.forEach((cartItem) => {
      if (
        cartItem.id === Number(dessertId) &&
        0 <= cartItem.quantity + Number(itemQuantity)
      ) {
        cartItem.quantity = Number(itemQuantity);
      }
      saveToStorage();
    });
  });
});

setInterval(renderCart, 1);
