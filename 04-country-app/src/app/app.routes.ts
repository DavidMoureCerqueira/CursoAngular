import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path:'',
    component:HomePageComponent,
  },

    {
    path:'country',
      loadChildren:()=> import('./country/country.routes') // Antes recibiamos el modulo y por eso elegiamos el contryRoutes pero al haber puesto export default countryRoutes ya lo importa automatico .then(m=>m.countryRoutes)

  },
    {
    path:'country',
      loadChildren:()=> import('./country/country.routes') // Antes recibiamos el modulo y por eso elegiamos el contryRoutes pero al haber puesto export default countryRoutes ya lo importa automatico .then(m=>m.countryRoutes)

  },
  {
    path:'**',
    redirectTo:''
  }

];
