import { CharacterListComponent } from '../character-list/character-list.component';
import { Character } from '../../../interfaces/character.interface';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',

})
export class DragonballCharacterAddComponent {

  name = signal('');
  power =signal(0);

  newCharacter=output<Character>(); //se crea la variable que se va a enviar


  addCharacter() {

    if(!this.name() || !this.power() || this.power()<=0){
      return;
    }
    const newCharacter:Character={
      id: Math.floor(Math.random()*1000),
      name:this.name(),
      power:this.power()
    }

      // this.characters.update((list)=>{return [...list, newCharacter];});
      this.newCharacter.emit(newCharacter); //se envia la variable
      this.resetFields();
    }
    resetFields(){
      this.name.set('');
      this.power.set(0);
  }
}

// character.input.required<Character>();

