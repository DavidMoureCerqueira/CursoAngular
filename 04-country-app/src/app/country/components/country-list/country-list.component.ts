import { Component, input } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink], //utilizamos el pipe para que muestro coma, sencillo, importarlo y ponerle | number
  templateUrl: './country-list.component.html',

})
export class CountryListComponent {

  countries = input.required<Country[]>()         //Le decimos que va a recibir un array de Country

  errorMessage = input<string | unknown | null>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)

}
