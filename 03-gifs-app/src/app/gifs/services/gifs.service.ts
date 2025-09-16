import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import  type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';


//Para crear  cache vamos a usar: Record




@Injectable({providedIn: 'root'})
export class GifService {

  private http=inject(HttpClient) //Hay que decir de donde viene en appconfig.ts

  trendingGifs=signal<Gif[]>([]); //Creamos una señal que contiene un array de Gif(el de nuestra interfaz))
  trendingGifsLoading= signal(true); //Tan pronto el servicio se crea esto sera true, cuando se cree la instancia y cuando se haya cargado ponerlo en falso

  searchHistory=signal<Record<string,Gif[]>>({});
  searchHistoryKeys=computed(()=>Object.keys(this.searchHistory())) //Cada vez que la señal history cambie se va a volver a computar el searchhistorykeys

  constructor( ){
    this.loadTrendingGifs();
    console.log('Servicio creado')
  }

  loadTrendingGifs(){

      this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
        params:{
          api_key:environment.giphyApiKey,
          limit: 20,
        },
      }).subscribe((resp)=>{
      const gifs=GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log(gifs);


      }) //Para que la petición HTTP se dispare hay que suscribirse, y se realiza con un callback con la respuesta del paso anterior

    }
  searchGifs(query:string){

      return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
        params:{
          api_key:environment.giphyApiKey,
          q:query,
          limit: 20,
        },
      }).pipe( //redirige y permite encadenar
        map(({data}) => data ),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),  // map -permite barrer cada elemento de la respuesta y devolver una transformacion
        //TODO: Historial
        tap(items=>{
          this.searchHistory.update(history=>({
            ...history, //Tal cual estaba la history antes...
            [query.toLowerCase()]: items,//Añadimos el query que apunta a los items que devolvio
          }));
        })                                                        // tap-encadenar efectos secundarios
      );


    }
  // }).subscribe((resp) =>{ //No es posible asignarle un return ya que no es el return final, si no del callback
  // const gifs=GifMapper.mapGiphyItemsToGifArray(resp.data);
  // this.searchedGifs.set(gifs);
  // this.searchedGifsLoading.set(false);


}
