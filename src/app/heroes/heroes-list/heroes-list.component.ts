import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  public heroeNames: string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?: string;

  public removeLastHero():void{
    this.deletedHero= this.heroeNames.pop();

  }

}
