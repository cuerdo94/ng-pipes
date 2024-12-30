import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfigPrimeNg } from './constants/primeng';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
  ],
  providers: [
    provideClientHydration(),
    appConfigPrimeNg.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
