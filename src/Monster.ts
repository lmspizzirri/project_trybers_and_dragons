import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85) {
    this._lifePoints = lifePoints;
    this._strength = 63;
  }

  get lifePoints() : number {
    return this._lifePoints;
  }

  get strength() : number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const currentLife = this._lifePoints - attackPoints;
    this._lifePoints = this._lifePoints < attackPoints ? -1 : currentLife;
    return this._lifePoints;
  }
  
  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;