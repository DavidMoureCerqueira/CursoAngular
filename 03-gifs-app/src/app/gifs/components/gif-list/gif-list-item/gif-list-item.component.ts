import {  Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gif-list-item',
  templateUrl: './gif-list-item.component.html',

})
export class GifListItemComponent {

  //TODO:imageUrl:string; input
  imageUrl=input.required<String>();

}
