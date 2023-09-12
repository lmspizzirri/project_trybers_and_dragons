import Energy from '../Energy';
import { SimpleFighter } from './SimpleFighter';

export interface Fighter extends SimpleFighter {
  defense: number,
  energy?: Energy,
  special?(enemy: Fighter):void;
  levelUp():void;
}