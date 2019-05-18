import FightersView from './fightersView';
import { fighterService } from './services/fightersService';
import { wait, waitImagesLoading } from './helpers/helper';
import Fighter from './fighter';

class App {
  constructor() {
    this.startApp();
  }

  static rootElement = document.getElementById('root');

  static fightersWrapperElement = document.getElementById('fighters-wrapper');

  static loadingElement = document.getElementsByClassName('loading-overlay')[0];

  async startApp() {
    try {
      App.loadingElement.classList.toggle('toggle-overlay');

      const fighters = await fighterService.getFighters();
      const fightersView = new FightersView(fighters);

      const fightersElement = fightersView.element;

      App.fightersWrapperElement.appendChild(fightersElement);
      // await wait(3000);
      await waitImagesLoading();
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      App.loadingElement.classList.toggle('toggle-overlay');
    }
  }
}

export default App;
