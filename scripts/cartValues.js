import saveToStorage from './saveToStorage.js';
import { cartItems } from '../data/data.js';
export default function cartValues() {
  document.querySelectorAll('.cart-value').forEach((valueElement) => {
    const { dessertId } = valueElement.dataset;

    cartItems.forEach((cartItem) => {
      if (cartItem.id === Number(dessertId)) {
        valueElement.value = cartItem.quantity;
      }
      saveToStorage();
    });
  });
}
