import View from './view';
import { wait } from './helpers/helper';

class ArenaView extends View {
  constructor() {
    super();
    this.initArena();
  }

  async initArena() {
    View.rootElement.classList.remove('showRoot');
    View.loadingElement.classList.toggle('toggle-overlay');
    await wait(2000);
    View.loadingElement.classList.toggle('toggle-overlay');
  }
}

export default ArenaView;
