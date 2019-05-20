import ArenaView from './arenaView';

class Arena {
  constructor(leftFighter, rightFighter) {
    this.view = new ArenaView(leftFighter, rightFighter);
    this.leftFighter = leftFighter;
    this.rightFighter = rightFighter;
  }

  leftFighterPunch() {
    const damage =
      this.leftFighter.getHitPower() - this.rightFighter.getBlockPower();
    this.rightFighter.health =
      damage > 0 ? this.rightFighter.health - damage : this.rightFighter.health;
  }

  rightFighterPunch() {
    const damage =
      this.rightFighter.getHitPower() - this.leftFighter.getBlockPower();
    this.leftFighter.health =
      damage > 0 ? this.leftFighter.health - damage : this.leftFighter.health;
  }

  async fight() {
    while (this.leftFighter.isAlive() && this.rightFighter.isAlive()) {
      this.leftFighterPunch();
      await this.view.showLeftFighterPunch(this.rightFighter.health);
      if (!this.rightFighter.isAlive()) break;
      this.rightFighterPunch();
      await this.view.showRightFighterPunch(this.leftFighter.health);
    }
    if (this.leftFighter.isAlive()) {
      await this.view.showWinner(
        this.leftFighter.name,
        this.leftFighter.source,
      );
    } else {
      await this.view.showWinner(
        this.rightFighter.name,
        this.rightFighter.source,
      );
    }
  }
}

export default Arena;
