import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Catalogue = {
  async render() {
    return `
        <section class="lazyload hero-image">
          <div class="hero-text">
            <h1 class="hero-title">Eat and Chill</h1>
            <p class="hero-tagline">Great experience comes from great foods</p>
          </div>
        </section>
        <h2 class="content-title">Catalogue Page</h2>
        <ul class="catalogue-list"></ul>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.catalogue();
    const restaurantContainer = document.querySelector('.catalogue-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Catalogue;
