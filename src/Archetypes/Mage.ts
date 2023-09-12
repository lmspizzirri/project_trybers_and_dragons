import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _archeTypeInstancesCount = 0;
  private _energyType: EnergyType;
    
  constructor(name: string) {
    super(name);
    Mage._archeTypeInstancesCount += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._archeTypeInstancesCount;
  }
}
    
export default Mage;