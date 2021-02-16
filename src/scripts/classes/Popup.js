import { BaseComponent } from './BaseComponent';

export class Popup extends BaseComponent {

  constructor(container, markup, createFormValidator, sendCardToApi) {
    super();
    this._container = container;
    this._markup = markup;
    this._createFormValidator = createFormValidator;
    this._sendDataToApi = sendCardToApi;
    this._setHandlers = this._setHandlers.bind(this);
  };

  open = (userData) => {
    this.create();
    //Если у попапа есть свойство для обновления данных в полях и эти данные пришли
    (this.hasOwnProperty('_updateInformation') && (userData)) ? this._updateInformation(userData) : false;
    this._container.classList.toggle('popup_is-opened');
    this._setHandlers();
    this._setEventListeners();
    this._formValidator.setEventListeners();
  };

  _close = () => {
    this._container.classList.remove('popup_is-opened');
    this._removeEventListeners();
    this._formValidator.removeEventListeners();
    this._view.remove();
  };

  create() {
    this._view = this._markup.content.cloneNode(true).children[0];
    this._container.append(this._view);
  }

  _setHandlers() {
    const closeBtn = this._view.querySelector('.popup__close');
    return this._handlersArr = [
      {
        element: closeBtn,
        event: 'click',
        callbacks: [this._close],
      },
    ];
        // document.addEventListener('keydown', () => { this._escPopup(event) });
  };

  // _escPopup = (event) => {
  //   if (event.keyCode == 27) {
  //     this._close();
  //   }
  // };

}