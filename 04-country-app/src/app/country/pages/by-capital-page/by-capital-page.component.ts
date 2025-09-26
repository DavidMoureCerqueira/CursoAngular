import { CountryService } from './../../services/country.service';
import { Component, inject, input, resource, signal} from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { rxResource } from '@angular/core/rxjs-interop'
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, Observable, of } from 'rxjs';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',

})
export class ByCapitalPageComponent {

  countryService=inject(CountryService)
  //Forma Corta usando el recurso en angular de resource:
  //Cuando se trabaja con resource hay devolver promesas (la promesa de devolver algo)
  query=signal('');

  countryResource=rxResource({
    params:()=>({query:this.query()}),
    stream:({params})=>{
      if(!params.query) return of([]); //of() es una funcion que nos permite devolver el observable de un objeto vacio (lo ponemos entre parentesis)
      return this.countryService.searchByCapital(params.query);
    },
    
  })












  // countryResource = resource({
  //   params:() =>({query:this.query()}),
  //   loader:async({params})=>{
  //     if(!params.query) return []; //Si no tiene valor que no busque o que devuelva array vacio

  //     return await firstValueFrom( //Es un operador rxjs que nos va a permiter transformar un observable en una promesa, usamos el await para que el observable emita un valor
  //       this.countryService.searchByCapital(params.query)//Si existe ejecutamos la peticion http,
  //     )

  //   }     //params es una funcion que devuelve un objeto o una señal
  // })

















  //Forma Larga:

  // isLoading=signal(false)                                                         //Para controlar si se esta buscando algo para no bombardear con peticiones
  // isError=signal<string|null>(null);                                              //En caso de error, string-->Codigo de error, lo iniciamos como null
  // countries=signal<Country[]>([])                                             //Señal de la interfaz que utilizamos obtenida de la API (no es lo ideal)

  // onSearch(query:string){
  //   if (this.isLoading()) return;                                                 //Para que si esta con una peticion no envie otra

  //   this.isLoading.set(true);
  //   this.isError.set(null);                                                       //Vamos a limpiar el error en caso de que lo tengamos

  //   // this.countryService.searchByCapital(query).subscribe(countries=>{             //Llamo al servicio para que busque pero al ser una peticion HTTP si no hay una suscripcion no se ejecuta
  //   //                                                                               //Me suscribo para poder utilizar la respuesta, que la defino y la imprimo.
  //   //   //Verificacion del procedimiento en el suscribe
  //   //   this.isLoading.set(false)                                                   //Ya terminamos de cargar asi que lo ponemos en false, para poder generar una nueva peticion
  //   //   this.countries.set(countries)                                               //Despues de haber definido en el servicio que el Observable iba a emitir un array de RestCountry, ya no da error, y countries (respuesta) es u array de RestCountry



  //   //   console.log(countries)

  //   //Se ha modificado el codigo superior para la introduccion del control de excepciones:

  //   this.countryService.searchByCapital(query)
  //   .subscribe({
  //     next:(countries) =>{ //Hacemos funcion de flecha para no perder la referencia al this

  //       this.isLoading.set(false);
  //       this.countries.set(countries);

  //     },
  //     error:(err)=>{

  //       this.isLoading.set(false)
  //       this.countries.set([])
  //       this.isError.set(err)

  //     }


  //   });
    //{complete} --> Cuando ya no se van a emitir valores
    //{error} --> Cuando hay un error
    //{next} --> Cuando todo sale bien y puede seguir con el siguiente


  //}


}



