
import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, } from "@angular/core";

@Component({

  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]

})
export class HeroPageComponent {

  nameSignal = signal<string>('Ironman');
  ageSignal = signal<number>(45);

  heroDescription = computed(() => {
    const description = `${this.nameSignal()}-${this.ageSignal()}`;
    return description;
  })

  capitalizedName = computed(() => { //se modifica que de usar el toUpperCase() en el HTML a crear esta señal computada
    return this.nameSignal().toUpperCase();
  })

  // getHeroDescription() {
  //   return `${this.nameSignal()} - ${this.ageSignal()}`;
  // }

  changeHero() {
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(22);
  }

  changeAge() {
    this.ageSignal.set(60);
  }


  resetForm() {
    this.nameSignal.set('Ironman');
    this.ageSignal.set(45);
  }

  ///Estos metodos no los ha utilizado el, ha puesto el .toUpperCase() en el HTML y es lo que voy a hacer
  //   setNameCapitalice() {
  //     this.nameSignal.set(this.nameSignal().toUpperCase())

  //   }
  //   getNameCapitalice(): string{ //Tambien se podia hacer con .toUpperCase() en el HTML
  //     // this.setNameCapitalice();
  //      return this.nameSignal().toUpperCase();

  //   }
}


