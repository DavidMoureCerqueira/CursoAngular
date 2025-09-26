import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mappers';

const API_URL= 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)                           //Inyectamos el servicio, lo que nos hace tener que ir a app.configy añadir provideHttpClient(withFetch())


  searchByCapital(query:string):Observable<Country[]>{                              //Creamos la funcion que recibe como parametro la busqueda y retorna un observable de array Country
    query=query.toLocaleLowerCase();                          //La pasamos a minusculas
    const url=`${API_URL}/capital/${query}`

    // return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`);      //Retornamos la direccion de la api/capital/query

    //Siempre es bueno decir que tipo de dato nos va a emitir el observable <>, en este caso se espera un interfaz RestCountry (porque buscamos en la API), y se espera que sea un array
    // La linea comentada del return es como lo hicimos sin el mapper y abajo lo voy a poner con el mapper

    return this.http.get<RESTCountry[]>(url)
    .pipe(
      map((resp)=>CountryMapper.mapRestCountryToCountryArray(resp)), //Crea un nuevo array que envia a la funcion del mapper para que lo transforme
      catchError(error=>{
        console.log('Error fetching', error);
        return throwError(()=>new Error(`No se pudo obtener paises con ese query ${query}`))
      })
    );
  }

  searchByCountry(query:string):Observable<Country[]>{
    const url=`${API_URL}/name/${query}`;
    query=query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(url)
    .pipe(
      map((resp)=>CountryMapper.mapRestCountryToCountryArray(resp)),
      catchError(error=>{
        console.log('Error fetching', error);
        return throwError(()=>new Error(`No se pudo obtener paises con ese ${query}`))
      })
    );
  }

}
