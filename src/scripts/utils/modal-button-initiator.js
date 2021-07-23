import { createDetailMenuTemplate } from '../views/templates/template-creator';

const ModalButtonInitiator = {
  async init({
    modalOpen, modal, restaurant,
  }) {
    this._modalOpen = modalOpen;
    this._modal = modal;
    this._restaurant = restaurant;

    await this._renderModal();
  },

  async _renderModal() {
    this._modal.innerHTML = createDetailMenuTemplate(this._restaurant);

    this._modalOpen.addEventListener('click', (event) => {
      this._modal.style.display = 'block';
    });

    const modalExit = document.getElementById('modal-exit');
    modalExit.addEventListener('click', () => {
      this._modal.style.display = 'none';
    });
  },
};

export default ModalButtonInitiator;
