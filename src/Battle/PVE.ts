import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _player: Fighter, 
    private _monster: SimpleFighter[] | Fighter[],
  ) { 
    super(_player);
    this._player = _player;
    this._monster = _monster;
  } 

  fight(): number {
    while (this._player.lifePoints > 0 && this._monster
      .some((monster) => monster.lifePoints > 0)) {
      this._player.attack(this._monster
        .filter((monster) => monster.lifePoints > 0)[0]);
      this._monster.forEach((monster) => monster.attack(this.player));
    }
    return super.fight();
  }
}

export default PVE;