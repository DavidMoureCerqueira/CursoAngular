import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject} from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  // Para volver a la pagina anterior respectivamente desde donde acabamos en la del notfound

  location=inject(Location);

  goBack(){
    this.location.back();
  }

 }
