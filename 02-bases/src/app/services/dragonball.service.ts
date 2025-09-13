
import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';
// Un servicio es una clase comun y corriente pero como va a trabajar con las inyecciones
// y funciona como un single ton-> siendo siempre la misma instancia. Por lo tanto el servicio va a permanecer aunque se destruyan los componentes
//He creado esta carpeta

//Para leer el localStorate:
const loadFromLocalStorage=():Character[]=>{

  const characters=localStorage.getItem('characters');

  return characters ? JSON.parse(characters):[] //Si es diferente de nulo hacemos el proceso opuesto a la serializacion para transformar el objeto a string
  //Si no es un characters, que lo pase como Array vacio
}

@Injectable({providedIn:'root'}) //Decorador que transforma la clase en un servicio, se usa el providedIn:root porque me interesa que este a nivel global de la app
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());



  // Almacenar en el local storage vamos a usar efectos->
  // un efecto es una funcion que recibe un callback que vamos a disparar cada vez que algo pase
  // console.log(`Character count ${this.characters().length}`) //Backtics--> converir a string $--> dentro de backtics evalua la expresion en js y coge el resultado
  saveToLocalStorage = effect(()=>{ //Una funcion por efecto
   localStorage.setItem('characters', JSON.stringify(this.characters()))
  });




  addCharacter(character:Character) {
    this.characters.update(list=>[...list, character]);
    }


}
