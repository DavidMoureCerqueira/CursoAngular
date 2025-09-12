import type { Character } from '../../../interfaces/character.interface';
import { RequiredOptions } from './../../../../../node_modules/prettier/index.d';

import { Component, input, signal} from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',

})
export class CharacterListComponent {



     characters=input.required<Character[]>();
     listName=input.required<string>();






}
