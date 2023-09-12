import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _racesInstancesCount = 0;
    
  constructor(name: string, dexterity: number, maxLifePoints = 99) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Elf._racesInstancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._racesInstancesCount;
  }
}
    
export default Elf;