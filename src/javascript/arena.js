import ArenaView from './arenaView';

class Arena {
  constructor(leftFighter, rightFighter) {
    this.view = new ArenaView(leftFighter, rightFighter);
    this.leftFighter = leftFighter;
    this.rightFighter = rightFighter;
  }

  fight() {
    console.log('fight started');
  }
}

export default Arena;
