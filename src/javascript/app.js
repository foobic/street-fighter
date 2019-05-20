import FightersView from './fightersView';
import { fighterService } from './services/fightersService';
import { wait } from './helpers/helper';
import View from './view';

class App {
  constructor() {
    this.startApp();
  }

  async startApp() {
    try {
      View.toggleLoadingOverlay();
      const fighters = await fighterService.getFighters();
      const fightersView = new FightersView(fighters);

      const fightersElement = fightersView.element;

      View.containers.fighters.appendChild(fightersElement);
      await wait(1000);
      View.switchLayout('main');
    } catch (error) {
      console.warn(error);
      View.switchLayout('main');
      View.layouts.main.innerText = 'Failed to load data';
    } finally {
      View.toggleLoadingOverlay();
    }
  }
}

export default App;
