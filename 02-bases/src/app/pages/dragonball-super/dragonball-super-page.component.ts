import { Component, computed, OnInit, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add/dragonball-character-add.component";


export interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector:'dragon-ball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],

})

export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter() {

    if(!this.name() || !this.power() || this.power()<=0){
      return;
    }
    const newCharacter:Character={
      id: this.characters().length + 1,
      name:this.name(),
      power:this.power()
    }

      this.characters.update((list)=>{return [...list, newCharacter];});
      this.resetFields();
    }
    resetFields(){
      this.name.set('');
      this.power.set(0);
  }



}
