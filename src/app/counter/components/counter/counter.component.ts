import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template: `
  <p>Mostramos Counter: {{counter}}</p>

    <button (click)="IncreaseBy(1)" >+1</button>
    <button (click)="Resetea()">Resetea</button>
    <button (click)="Decrementar(1)">-1</button>`
})

export class Countercomponent
{
  title = 'Mi primera app';
  public counter: number=10;

  IncreaseBy(value:number):void
  {
    this.counter=this.counter+value;
  }
  Decrementar(value:number):void
  {

    this.counter=this.counter-value;
  }
  Resetea():void
  {
    this.counter=10;
  }

}
