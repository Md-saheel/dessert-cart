import { desserts } from '../data/data.js';

export default function renderDesserts() {
  let dessertsHTML = '';
  desserts.forEach((dessert) => {
    dessertsHTML += `<section class="dessert">
        <picture>
        <source media="(max-width:500px)" srcset="${
          dessert.image.mobile
        }" class="dessert-img">
        <source media="(max-width:800px)" srcset="${
          dessert.image.tablet
        }" class="dessert-img">
        <img src="${dessert.image.desktop}" class="dessert-img" />
        </picture>
        <br/><section class="add-cart"><button class="remove-btn" data-dessert-id="${
          dessert.id
        }">-</button>
        <input class="cart-value" value=${0} data-dessert-id="${
      dessert.id
    }"></input><button class="add-btn" data-dessert-id="${
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
