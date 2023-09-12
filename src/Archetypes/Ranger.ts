import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _archeTypeInstancesCount = 0;
  private _energyType: EnergyType;
    
  constructor(name: string) {
    super(name);
    Ranger._archeTypeInstancesCount += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archeTypeInstancesCount;
  }
}
    
export default Ranger;