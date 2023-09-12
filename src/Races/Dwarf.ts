import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _racesInstancesCount = 0;
    
  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Dwarf._racesInstancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._racesInstancesCount;
  }
}
    
export default Dwarf;