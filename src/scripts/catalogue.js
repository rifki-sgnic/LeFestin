import data from "../DATA.json";
const catalogue = document.querySelector(".catalogue-list");

let catalogueItem = `<div class="catalog-warning">
        <h2 class="catalog-warning-text"><a href="#">Empty Data</a></h2>
    </div>`;

if (data.restaurants.length > 0) {
  catalogueItem = "";

  data.restaurants.forEach((e) => {
    catalogueItem += `<li class="catalogue-item">
        <div class="catalogue" tabindex="0">
          <div class="catalogue-image">
            <img src="${e.pictureId}" class="restaurant-img" alt="Restaurant Poster"/>
          </div>
          <div class="catalogue-content">
            <h2 class="catalogue-title">${e.name}</h2>
            <p class="catalogue-location">${e.city}</p>
            <p class="catalogue-desc">
              ${e.description.substr(0, 120)}
            </p>
            <p>Rating: ${e.rating}</p>
          </div>
        </div>
      </li>`;
  });
}

catalogue.innerHTML = catalogueItem;