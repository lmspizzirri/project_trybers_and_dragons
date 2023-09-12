import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _archeTypeInstancesCount = 0;
  private _energyType: EnergyType;
    
  constructor(name: string) {
    super(name);
    Necromancer._archeTypeInstancesCount += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archeTypeInstancesCount;
  }
}
    
export default Necromancer;