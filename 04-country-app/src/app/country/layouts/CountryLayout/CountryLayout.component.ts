import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenuComponent], //Nos va a permitir que traiga rutas hijas, digamos darle un layout global que se mantenga
  templateUrl: './CountryLayout.component.html',

})
export class CountryLayoutComponent { }

