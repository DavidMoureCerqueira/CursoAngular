import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add/dragonball-character-add.component";
import { DragonballService } from '../../services/dragonball.service';


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
//Haciendo esa persistencia con servicios, services/dragonball.service nos llevamos la logica de aqui
//y vamos a seguir haciendo una inyeccion de dependecias

//Formas de hacer inyeccion de dependencias, tradicional con el constructo
  // constructor(
  //   public dragonballService:DragonballService
  // ){}

  //Recomendada: usar una property:
  public dragonballService = inject(DragonballService);

  
}
