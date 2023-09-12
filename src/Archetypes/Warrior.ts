import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _archeTypeInstancesCount = 0;
  private _energyType: EnergyType;
    
  constructor(name: string) {
    super(name);
    Warrior._archeTypeInstancesCount += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archeTypeInstancesCount;
  }
}
    
export default Warrior;