import View from './view';
import FighterView from './fighterView';
import { fighterService } from './services/fightersService';

class FightersView extends View {
  constructor(fighters) {
    super();

    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
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

  async _getFighterDetails(fighter) {
    if (this.fightersDetailsMap.has(fighter._id))
      return this.fightersDetailsMap.get(fighter._id);

    const fighterDetails = await fighterService.getFighterDetails(fighter._id);
    this.fightersDetailsMap.set(fighter._id, fighterDetails);
    return fighterDetails;
  }

  async handleFighterClick(event, fighter) {
    try {
      const fighterDetails = await this._getFighterDetails(fighter);
      const fighterView = this.fightersViews.get(fighter._id);
      fighterView.showModal(fighterDetails);
    } catch (error) {
      console.warn(error);
    }
  }
}

export default FightersView;
