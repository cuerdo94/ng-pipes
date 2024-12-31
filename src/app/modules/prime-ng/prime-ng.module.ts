import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    MenuModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
