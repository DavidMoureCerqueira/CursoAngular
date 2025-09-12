import { Component, computed, OnInit, signal } from '@angular/core';
import { NgClass } from "@angular/common";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({

  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass]
})

export class DragonballPageComponent {
  // TS no sabe que va a tener el Array o lista y lo pone como de tipo never, es decir no sabe que tipo de datos va a tener dentro nunca
  // Para evitar lo mencionado hacemos una interface
  // characters = signal([]);

  // Dentro de characters va a fluir un arrray de Character

  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 4, name: 'Yamcha', power: 500 },
    // { id: 3, name: 'Piccolo', power: 3000 },
  ]);
  // Es otra manera de poder modificar los datos con una señal computada que devuelve un el color del texto en base a condiciones o decisiones
  // powerClasses=computed(()=>{
  //   return{
  //     'text-danger':true,
  //   };
  // });
  addCharacter() {
// Funciona porque yo en aunque tengo los valores definidos, con el input/change estoy modificando estos valores de forma dinamica

// Validacion
if(!this.name() || !this.power() || this.power()<=0){
  return;
  // Si no hay nombre, poder o el poder es <= a 0 devolvemos no lo añadimos
}
  const newCharacter:Character={
    id: this.characters().length + 1, //No es la manera ideal de hacer id, pero de momento hacemos asi
    name:this.name(),
    power:this.power()
  }
  // this.characters().push(newCharacter); No es lo ideal para señales
    this.characters.update((list)=>{return [...list, newCharacter];});
    this.resetFields();
  }
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }



}
