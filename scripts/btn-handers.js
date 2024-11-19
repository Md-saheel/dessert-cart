import saveToStorage from './saveToStorage.js';
import renderCart from './renderCart.js';
import { cartItems } from '../data/data.js';

export default function btnHandlers() {
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
      renderCart();
    });
  });
}
