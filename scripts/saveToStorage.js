import { cartItems } from '../data/data.js';
export default function saveToStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
