class View {
  element;

  static layouts = {
    main: document.querySelector('.main'),
    arena: document.querySelector('.arena'),
  };

  static containers = {
    fighters: document.querySelector('.fighters-container'),
  };

  static loadingOverlay = document.querySelector('.loading-overlay');

  createElement({ tagName, className = '', attributes = {} }) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key =>
      element.setAttribute(key, attributes[key]),
    );

    return element;
  }

  static hideAll() {
    View.layouts.main.classList.remove('show-main');
    View.layouts.arena.classList.remove('show-arena');
    View.layouts.main.classList.add('hide-main');
    View.layouts.arena.classList.add('hide-arena');
  }

  static showArena() {
    View.layouts.arena.classList.remove('hide-arena');
    View.layouts.arena.classList.add('show-arena');
  }

  static showMain() {
    View.layouts.main.classList.remove('hide-main');
    View.layouts.main.classList.add('show-main');
  }

  static toggleLoadingOverlay() {
    View.loadingOverlay.classList.toggle('toggle-overlay');
  }

  static switchLayout(layoutName) {
    View.hideAll();

    if (layoutName === 'arena') View.showArena();
    else if (layoutName === 'main') View.showMain();
  }
}

export default View;
