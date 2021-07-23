import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="lazyload hero-image">
          <div class="hero-text">
            <h1 class="hero-title">FAVORITE PAGE</h1>
            <p class="hero-tagline">Your favorite restaurants</p>
          </div>
        </section>
        <ul class="catalogue-list"></ul>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.catalogue-list');
    if (restaurants.length <= 0) {
      restaurantContainer.innerHTML = `<li class="catalogue-item__not__found" tabindex="0">
            <h2>No Favorite Restaurant</h2>
        </li>`;
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
