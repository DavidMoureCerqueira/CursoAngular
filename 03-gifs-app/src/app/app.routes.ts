
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'dashboard',
    loadComponent: ()=>
      import('./gifs/pages/dashboard-page/dashboard-page.component'),
    //con children se crean las rutas hijas, pero hay que crear un router-outlet y exportarlo al componente dashboard
    children:[
      {
        path:'trending',
        loadComponent: ()=>
          import('./gifs/pages/trending-page/trending-page.component'),
      },
      {
        path:'search',
        loadComponent: ()=>
          import('./gifs/pages/search-page/search-page.component'),
      },

      // Creamos un redirect para las clases hijas
       {
         path:'**',
         redirectTo:'trending',
        }
    ],
  },


  {
      path:'**',
      redirectTo: 'dashboard',
    }
];
