import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _racesInstancesCount = 0;
    
  constructor(name: string, dexterity: number, maxLifePoints = 60) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Halfling._racesInstancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._racesInstancesCount;
  }
}
    
export default Halfling;