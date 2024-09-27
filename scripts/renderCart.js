import { cartItems } from '../data/data.js';
import { desserts } from '../data/data.js';

export default function renderCart() {
  let cartQuantity = 0;
  let cartElements = '';
  let orderTotal = 0;
  let cartHTML = '';

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
