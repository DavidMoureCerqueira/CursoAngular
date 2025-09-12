import { CharacterListComponent } from '../character-list/character-list.component';
import { Character } from '../../../interfaces/character.interface';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',

})
export class DragonballCharacterAddComponent {

  name = signal('');
  power =signal(0);





  addCharacter() {

    if(!this.name() || !this.power() || this.power()<=0){
      return;
    }
    const newCharacter:Character={
      id: 1000,
      name:this.name(),
      power:this.power()
    }

      // this.characters.update((list)=>{return [...list, newCharacter];});
      console.log({newCharacter});
      this.resetFields();
    }
    resetFields(){
      this.name.set('');
      this.power.set(0);
  }
}

// character.input.required<Character>();

