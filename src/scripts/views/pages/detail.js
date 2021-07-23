import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ModalButtonInitiator from '../../utils/modal-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
        <div id="restaurant"></div>

        <div id="restaurant-modal" class="modal"></div>

        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    ModalButtonInitiator.init({
      modalOpen: document.querySelector('#modal-cta'),
      modal: document.querySelector('#restaurant-modal'),
      restaurant,
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        city: restaurant.restaurant.city,
        address: restaurant.restaurant.address,
        pictureId: restaurant.restaurant.pictureId,
        categories: restaurant.restaurant.categories,
        menus: restaurant.restaurant.menus,
        rating: restaurant.restaurant.rating,
        customerReviews: restaurant.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
