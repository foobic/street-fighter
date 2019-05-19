import FightersView from './fightersView';
import { fighterService } from './services/fightersService';
import { wait, waitImagesLoading } from './helpers/helper';
import View from './view';

class App {
  constructor() {
    this.startApp();
  }

  getSelectedFighters() {}

  async startApp() {
    try {
      View.loadingElement.classList.toggle('toggle-overlay');

      const fighters = await fighterService.getFighters();
      const fightersView = new FightersView(fighters);

      const fightersElement = fightersView.element;

      View.fightersWrapperElement.appendChild(fightersElement);
      // await wait(3000);
      await waitImagesLoading();
    } catch (error) {
      console.warn(error);
      View.rootElement.innerText = 'Failed to load data';
    } finally {
      View.loadingElement.classList.toggle('toggle-overlay');
    }
  }

  // fight(){

  // }
}

export default App;
