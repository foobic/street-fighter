class View {
  element;

  static rootElement = document.getElementById('root');

  static fightersWrapperElement = document.getElementById('fighters-wrapper');

  static loadingElement = document.getElementsByClassName('loading-overlay')[0];

  createElement({ tagName, className = '', attributes = {} }) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key =>
      element.setAttribute(key, attributes[key]),
    );

    return element;
  }
}

export default View;
