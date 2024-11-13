import { Component } from "@angular/core";

@Component({
  selector:'app-heroes-hero',
  templateUrl:'./hero.component.html',
  styleUrls:['./hero.component.css']
})

export class HeroComponent
{
  public name: string='Ironman';
  public age: number=45;

  get capilalizedName(): string{
    return  this.name.toUpperCase();
  }

  getHeroDescription():string
  {
    return `${this.name} - ${this.age}`;
  }

  changeNombre():void
  {
    this.name='Pepe';
  }

  changeEdad():void
  {
    this.age=69;
  }

  Resetear():void
  {
    this.name='Ironman';
    this.age=45;
  }

}
