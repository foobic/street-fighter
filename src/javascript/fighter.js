class Fighter {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  getHitPower() {
    const criticalHitChance = Math.random() + 1;
    const power = this.attack * criticalHitChance;
    return power;
  }

  getBlockPower() {
    const dodgeChance = Math.random() + 1;
    const power = this.defense * dodgeChance;
    return power;
  }
}

export default Fighter;
