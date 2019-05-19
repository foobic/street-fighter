import View from './view';
import { wait } from './helpers/helper';

class ArenaView extends View {
  constructor(leftFighter, rightFighter) {
    super();
    this.leftFighter = leftFighter;
    this.rightFighter = rightFighter;
    this.initArena();
  }

  async initArena() {
    View.rootElement.classList.remove('showRoot');
    // View.loadingElement.classList.toggle('toggle-overlay');
    this.createFighters();
    // await wait(2000);
    // View.loadingElement.classList.toggle('toggle-overlay');
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

  createFighters() {
    const leftFighterWrapper = document.querySelector('.leftFighter');
    const rightFighterWrapper = document.querySelector('.rightFighter');
    const leftImg = this.createImage(this.leftFighter.source);
    const rightImg = this.createImage(this.rightFighter.source);
    leftFighterWrapper.appendChild(leftImg);
    rightFighterWrapper.appendChild(rightImg);
  }
}

export default ArenaView;
