const DrawerInitiator = {
  init({ button, buttonExit, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    buttonExit.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('main-active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('main-active');
  },
};

export default DrawerInitiator;
