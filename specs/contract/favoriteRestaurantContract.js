const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the Restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteRestaurant.getRestaurant('rqdv5juczeskfw1e867')).toEqual({ id: 'rqdv5juczeskfw1e867' });
    expect(await favoriteRestaurant.getRestaurant('s1knt6za9kkfw1e867')).toEqual({ id: 's1knt6za9kkfw1e867' });
    expect(await favoriteRestaurant.getRestaurant('w9pga3s2tubkfw1e867')).toEqual(undefined);
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([{ id: 'rqdv5juczeskfw1e867' }, { id: 's1knt6za9kkfw1e867' }]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteRestaurant.deleteRestaurant('rqdv5juczeskfw1e867');

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([{ id: 's1knt6za9kkfw1e867' }, { id: 'w9pga3s2tubkfw1e867' }]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteRestaurant.deleteRestaurant('uewq1zg2zlskfw1e867');

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
      { id: 'rqdv5juczeskfw1e867' },
      { id: 's1knt6za9kkfw1e867' },
      { id: 'w9pga3s2tubkfw1e867' },
    ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
