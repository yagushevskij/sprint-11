import {Popup} from './Popup';
export class ImagePopup extends Popup {

    constructor(markup, container) {
        super(container, markup);
    }

    _create = () => {
        super._create();
        this._view.querySelector('.popup__image-content').setAttribute('src', this._data);
    };

    _close = () => {
      super._close();
    }
}
