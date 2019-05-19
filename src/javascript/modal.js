// Purpose of this file - get all references for modal
// and hang on all handlers only once at initialization

export const initModal = function initModal() {
  // All needed DOM references
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal-controls-close');
  const saveBtn = document.querySelector('.modal-controls-save');

  const fighterContainer = {
    name: document.getElementById('fighter-name'),
    health: document.getElementById('fighter-health'),
    attack: document.getElementById('fighter-attack'),
    defense: document.getElementById('fighter-defense'),
  };

  const toggle = () => modal.classList.toggle('show-modal');

  let fighter = null;

  const changeFighter = newFighter => {
    fighter = newFighter;
  };

  const show = () => {
    fighterContainer.name.innerHTML = fighter.name;
    fighterContainer.health.value = fighter.health;
    fighterContainer.attack.value = fighter.attack;
    fighterContainer.defense.value = fighter.defense;
    toggle();
  };

  const edit = () => {
    fighter.health = parseInt(fighterContainer.health.value, 10);
    fighter.attack = parseInt(fighterContainer.attack.value, 10);
    fighter.defense = parseInt(fighterContainer.defense.value, 10);
    toggle();
  };

  // Here we hang on all handler functions only once
  saveBtn.addEventListener('click', edit);
  closeBtn.addEventListener('click', toggle);
  window.addEventListener('click', e => (e.target === modal ? toggle() : null));

  return { changeFighter, show };
};
