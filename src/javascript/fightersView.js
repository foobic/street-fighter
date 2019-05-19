import View from './view';
import FighterView from './fighterView';
import Fighter from './fighter';
import { fighterService } from './services/fightersService';
import Arena from './arena';

class FightersView extends View {
  constructor(fighters) {
    super();

    this.handleClick = this.handleFighterClick.bind(this);
    this.handleFightClick = this.handleFightClick.bind(this);
    this.createFighters(fighters);

    const fightBtn = document.querySelector('.fight-button');
    fightBtn.addEventListener('click', this.handleFightClick);
  }

  fightersDetailsMap = new Map();

  fightersViews = new Map();

  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);
      this.fightersViews.set(fighter._id, fighterView);
      return fighterView.element;
    });

    this.element = this.createElement({
      tagName: 'div',
      className: 'fighters',
    });
    this.element.append(...fighterElements);
  }

  async _getFighterDetails(fighterId) {
    if (this.fightersDetailsMap.has(fighterId))
      return this.fightersDetailsMap.get(fighterId);

    const fighterDetails = await fighterService.getFighterDetails(fighterId);
    this.fightersDetailsMap.set(fighterId, fighterDetails);
    return fighterDetails;
  }

  async handleFighterClick(event, fighter) {
    try {
      const fighterDetails = await this._getFighterDetails(fighter._id);
      const fighterView = this.fightersViews.get(fighter._id);
      fighterView.showModal(fighterDetails);
    } catch (error) {
      console.warn(error);
    }
  }

  async handleFightClick() {
    try {
      const leftFighterSelect = document.querySelector('.left-fighter-select');
      const rightFighterSelect = document.querySelector(
        '.right-fighter-select',
      );

      const leftFighterId =
        leftFighterSelect.options[leftFighterSelect.selectedIndex].value;
      const rightFighterId =
        rightFighterSelect.options[rightFighterSelect.selectedIndex].value;

      // Get Fighters details from server if needed
      await this._getFighterDetails(leftFighterId);
      await this._getFighterDetails(rightFighterId);

      const leftFighterDetails = this.fightersDetailsMap.get(leftFighterId);
      const rightFighterDetails = this.fightersDetailsMap.get(rightFighterId);

      // Create Fighters
      const leftFighter = new Fighter(
        leftFighterDetails.name,
        leftFighterDetails.health,
        leftFighterDetails.attack,
        leftFighterDetails.defense,
        leftFighterDetails.source,
      );
      const rightFighter = new Fighter(
        rightFighterDetails.name,
        rightFighterDetails.health,
        rightFighterDetails.attack,
        rightFighterDetails.defense,
        rightFighterDetails.source,
      );

      const arena = new Arena(leftFighter, rightFighter);
      arena.fight();
    } catch (error) {
      console.warn(error);
    }
  }
}

export default FightersView;
