import FightersView from './fightersView';
import { fighterService } from './services/fightersService';
import { wait } from './helpers/helper';

class App {
  constructor() {
    this.startApp();
  }

  static rootElement = document.getElementById('root');

  static loadingElement = document.getElementsByClassName('loading-overlay')[0];

  async startApp() {
    try {
      App.loadingElement.classList.toggle('toggle-overlay');

      const fighters = await fighterService.getFighters();
      await wait(3000);
      const fightersView = new FightersView(fighters);
      const fightersElement = fightersView.element;

      App.rootElement.appendChild(fightersElement);
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      App.loadingElement.classList.toggle('toggle-overlay');
    }
  }
}

export default App;
