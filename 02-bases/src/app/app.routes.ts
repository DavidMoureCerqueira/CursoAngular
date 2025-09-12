import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent,

  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },

  {
    path: 'dragon',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonSuper',
    component: DragonballSuperPageComponent,
  },

  {
    //Para que rediriga cuando se introduce un direccion no considerada, puede ser texto, un js lo que sea
    path: '**',
    redirectTo: '', //Este comando redirige a un path al haber puesto el vacio, es el de counter
  }
];
