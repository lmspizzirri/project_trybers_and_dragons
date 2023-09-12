import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _racesInstancesCount = 0;
    
  constructor(name: string, dexterity: number, maxLifePoints = 74) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Orc._racesInstancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._racesInstancesCount;
  }
}
    
export default Orc;