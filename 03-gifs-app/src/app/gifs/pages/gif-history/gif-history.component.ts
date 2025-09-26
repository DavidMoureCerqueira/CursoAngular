import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop'
import { map } from 'rxjs';
import { GifListItemComponent } from "../../components/gif-list/gif-list-item/gif-list-item.component";
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
@Component({
  selector: 'gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',

})
export default class GifHistoryComponent {

  //recibir argumento

  // query=inject(ActivatedRoute).params.subscribe((params)=>{//(Ruta activa)
  //   // console.log({params});
  //   console.log(params['queryRoute']);
  // });
  gifService=inject(GifService);
  query=toSignal(   //cualquier observable se transforma en una señal en lugar de todo el codigo
    inject(ActivatedRoute).params.pipe( //Utilizamos pipe para poder extraer el param
      map((params)=>params['queryRoute'])
    )
  ); //en query tenemos todos los params no el query en si

  gifsByKey = computed(()=>{
    return this.gifService.getHistoryGifs(this.query())
  });

}
