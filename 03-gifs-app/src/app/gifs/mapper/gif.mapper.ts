//La idea es que reciba el objeto de la Api y devuelva un objeto de nuestra interfaz

import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper{
//Si el dia de mañana cambiase el el url o algo asi, cambiariamos aqui
  static mapGiphyItemToGif(item:GiphyItem):Gif{
    return{
      id: item.id,
      title:item.title,
      url:item.images.original.url
    };
  }

  static mapGiphyItemsToGifArray(items:GiphyItem[]):Gif[]{
    return items.map(this.mapGiphyItemToGif); //envia el array a una funcion que lo manipula y devuelve ese array manipulado
  }
}
