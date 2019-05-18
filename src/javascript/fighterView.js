import View from './view';
import { initModal } from './modal';

const modal = initModal();

class FighterView extends View {
  constructor(fighter, handleClick) {
    super();

    this.createFighter(fighter, handleClick);
  }

  createFighter(fighter, handleClick) {
    const { name, source } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);

    this.element = this.createElement({ tagName: 'div', className: 'fighter' });
    this.element.append(imageElement, nameElement);
    this.element.addEventListener(
      'click',
      event => handleClick(event, fighter),
      false,
    );
  }

  createName(name) {
    const nameElement = this.createElement({
      tagName: 'span',
      className: 'name',
    });
    nameElement.innerText = name;

    return nameElement;
  }

  createImage(source) {
    const attributes = { src: source };
    const imgWrapper = this.createElement({
      tagName: 'div',
      className: 'fighter-image-wrapper',
    });
    const imgElement = this.createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes,
    });
    imgWrapper.appendChild(imgElement);

    return imgWrapper;
  }

  showModal(fighter) {
    modal.changeFighter(fighter);
    modal.show();
  }
}

export default FighterView;
