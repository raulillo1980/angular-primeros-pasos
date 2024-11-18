import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

console.log(uuid)

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[]=[
    {
      id:uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id:uuid(),
      name:'Goku',
      power:9500
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:7500
    }
  ];

  addNewCharacter(c:Character):void{
    const newCharacter:Character={id:uuid(),...c}
    this.characters.push(newCharacter)//lo pone el último
  }

  //this.characters.splice(i,1);
  //onDeleteCharacter(i:number):void
  deleteCharacterById(id:string):void
  {
    this.characters=this.characters.filter(c =>c.id!=id)
  }


}
