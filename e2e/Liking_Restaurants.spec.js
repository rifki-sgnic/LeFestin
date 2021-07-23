const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.catalogue-list');
  I.see('No Favorite Restaurant', '.catalogue-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No Favorite Restaurant', '.catalogue-item__not__found');

  I.amOnPage('/');

  I.seeElement('.catalogue-title a');

  const firstRestaurant = locate('.catalogue-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalogue-item');
  const likedRestaurantTitle = await I.grabTextFrom('.catalogue-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.catalogue-title a');

  const firstRestaurant = locate('.catalogue-title a').first();
  I.click(firstRestaurant);

  // Like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalogue-item');

  I.click(firstRestaurant);

  // Unlike
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalogue-list');
  I.see('No Favorite Restaurant', '.catalogue-item__not__found');
});
