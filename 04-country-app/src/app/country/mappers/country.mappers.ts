import { Name } from './../interfaces/rest-countries.interface';
import { sample } from "rxjs";
import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper{

  //static RestCountry=> Country
  static mapRestCountryToCountry(restCountry:RESTCountry):Country{
    return{

      capital:restCountry.capital.join(','),
      cca2:restCountry.cca2,
      flag:restCountry.flag,
      FlagSvg:restCountry.flags.svg,
      name: restCountry.translations[`spa`].common ?? 'No Spanish Name',
      population:restCountry.population,

    };

  }
  //static RestCountry[]=> Country[]
  static mapRestCountryToCountryArray(restCountry:RESTCountry[]):Country[]{
    return restCountry.map(this.mapRestCountryToCountry);

  }
}
