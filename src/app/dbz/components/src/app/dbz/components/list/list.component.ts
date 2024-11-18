import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../../../../../interfaces/character.interface';
import { UUIDTypes } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()//Con esto indicas que recibe desde el padre main-page el characterList
  public characterList:Character[]=[
    {
      id:'',
      name:'Trunks',//por defecto sino se le pasan valores.
      power:10
    }
  ]

  @Output()
public CaracterABorrar: EventEmitter<string>=new EventEmitter();

public OnDeleteCharacter(id?:string):void
{
  this.CaracterABorrar.emit(id)
  console.log(id);
}

}
