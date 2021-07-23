import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<li class="catalogue-item">
<div class="catalogue" tabindex="0">
  <div class="catalogue-image">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" class="restaurant-img lazyload" alt="Restaurant Poster"/>
  </div>
  <div class="catalogue-content">
    <h2 class="catalogue-title"><a href="${`#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
    <p class="catalogue-location">${restaurant.city}</p>
    <p class="catalogue-desc">
      ${restaurant.description.substr(0, 120)}
    </p>
    <p>Rating: ${restaurant.rating}</p>
  </div>
</div>
</li>
`;

const createRestaurantDetailTemplate = ({ restaurant }) => `
<div class="detail-container">
  <div>
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" class="detail-image lazyload" alt="Restaurant Poster"/>
  </div>
  <div id="detail-content">
    <button id="modal-cta">
      <img src="./images/icon/restaurant-outline.svg" alt="Modal Icon">
    </button>
    <h2 class="detail-title">${restaurant.name}</h2>
    <p>${restaurant.address}, ${restaurant.city}</p>
    <p>Rating: ${restaurant.rating}/5</p>
    <div>
      <h2 class="detail-title-s">Categories</h2>
      <ul class="detail-categories">
        ${restaurant.categories.map((category) => `<li class="category">${category.name}</li>`).join('')}
      </ul>
    </div>
    <div>
      <h2 class="detail-title-s">Description</h2>
      <p class="detail-desc">${restaurant.description.substr(0, 300)}</p>
    </div>
    <div>
      <h2 class="detail-title-s">Customer Reviews</h2>
      <ul>
        ${restaurant.customerReviews.map((customer) => `
        <li class="customer-review">
        <img class="customer-img lazyload" src="./images/icon/person-circle-outline.svg" alt="customer">
          <div>
            <span>${customer.name}</span>
            <span>${customer.review}</span>
            <span class="review-date">${customer.date}</span>
          </div>
        </li>`).join('')}
      </ul>
    </div>
  </div>
</div>
`;

const createDetailMenuTemplate = ({ restaurant }) => `
<div class="modal-content">
  <button id="modal-exit">
    <img src="./images/icon/close-outline.svg" alt="Modal Icon">
  </button>

  <h2 class="menu-title">Menu</h2>
    <span>Foods</span>
    <ul>
      ${restaurant.menus.foods.map((menu) => `<li>${menu.name}</li>`).join('')}
    </ul>
    <span>Beverages</span>
    <ul>
      ${restaurant.menus.drinks.map((menu) => `<li>${menu.name}</li>`).join('')}
    </ul>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createDetailMenuTemplate,
};
