import View from './view';
import { wait } from './helpers/helper';

class ArenaView extends View {
  constructor(leftFighter, rightFighter) {
    super();
    this.leftFighter = leftFighter;
    this.rightFighter = rightFighter;
    this.initArena();
    this.leftFighterImgContainer = document.querySelector(
      '.arena-fighters-left--img',
    );
    this.rightFighterImgContainer = document.querySelector(
      '.arena-fighters-right--img',
    );
    [this.leftFighterImg] = this.leftFighterImgContainer.children;
    [this.rightFighterImg] = this.rightFighterImgContainer.children;
    [this.leftFighterNameElement] = document.querySelector(
      '.arena-fighters-name--left',
    ).children;
    [this.rightFighterNameElement] = document.querySelector(
      '.arena-fighters-name--right',
    ).children;
    [this.leftFighterHealthElement] = document.querySelector(
      '.arena-fighters-health--left',
    ).children;
    [this.rightFighterHealthElement] = document.querySelector(
      '.arena-fighters-health--right',
    ).children;
    this.leftFighterNameElement.innerHTML = leftFighter.name;
    this.rightFighterNameElement.innerHTML = rightFighter.name;
    this.leftFighterHealthElement.innerHTML = `${leftFighter.health}%`;
    this.rightFighterHealthElement.innerHTML = `${rightFighter.health}%`;
  }

  async showLeftFighterPunch(rightFighterHealth = 0) {
    rightFighterHealth = rightFighterHealth > 0 ? rightFighterHealth : 0;
    this.leftFighterImgContainer.classList.add('punch');
    this.rightFighterImg.classList.add('damaged');
    this.rightFighterHealthElement.innerHTML = `${Math.floor(
      rightFighterHealth,
    )}%`;
    await wait(1200);
    this.leftFighterImgContainer.classList.remove('punch');
    this.rightFighterImg.classList.remove('damaged');
  }

  async showRightFighterPunch(leftFighterHealth = 0) {
    leftFighterHealth = leftFighterHealth > 0 ? leftFighterHealth : 0;
    this.rightFighterImgContainer.classList.add('punch');
    this.leftFighterImg.classList.add('damaged');
    this.leftFighterHealthElement.innerHTML = `${Math.floor(
      leftFighterHealth,
    )}%`;
    await wait(1200);
    this.rightFighterImgContainer.classList.remove('punch');
    this.leftFighterImg.classList.remove('damaged');
  }

  async initArena() {
    View.toggleLoadingOverlay();
    this.createFighters();
    View.hideAll();
    await wait(0);
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
