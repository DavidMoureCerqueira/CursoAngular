import { ByRegionComponent } from './pages/by-region/by-region.component';

// Rutas especificas
import { Routes } from '@angular/router';

import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponentComponent } from './pages/country-page.component/country-page.component';

export const countryRoutes: Routes = [

  {
    path:'',
    component:CountryLayoutComponent,
    children: [
      {
        path:"by-capital",
        component: ByCapitalPageComponent
      },

      {
        path:"by-country",
        component: ByCountryPageComponent
      },

      {
        path:"by-region",
        component: ByRegionComponent
      },
      
      {
        path:'by/:code', //Para hacerlo un argumento dinamico se pone el argumento
        component:CountryPageComponentComponent

      },
      {

        path:'**',
        redirectTo:'by-capital',
      },
    ]
  },



];

export default countryRoutes; //Importa por defecto esta
