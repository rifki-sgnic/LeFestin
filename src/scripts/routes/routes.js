import Catalogue from '../views/pages/catalogue';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Catalogue, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
