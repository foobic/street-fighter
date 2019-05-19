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
    View.toggleLoadingOverlay();
    this.createFighters();
    View.hideAll();
    await wait(2000);
    View.switchLayout('arena');
    View.toggleLoadingOverlay();
  }

  createImage(source) {
    const attributes = { src: source };
    const imgElement = this.createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes,
    });

    return imgElement;
  }

  createFighters() {
    const leftFighterContainer = document.querySelector(
      '.arena-fighters-left--img',
    );
    const rightFighterContainer = document.querySelector(
      '.arena-fighters-right--img',
    );
    const leftImg = this.createImage(this.leftFighter.source);
    const rightImg = this.createImage(this.rightFighter.source);
    leftFighterContainer.appendChild(leftImg);
    rightFighterContainer.appendChild(rightImg);
  }
}

export default ArenaView;
