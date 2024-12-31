import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  exports: [
    MenuModule,
    ButtonModule,
  ]
})
export class PrimeNgModule { }
