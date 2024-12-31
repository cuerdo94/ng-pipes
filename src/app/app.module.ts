import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfigPrimeNg } from './constants/primeng';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    appConfigPrimeNg.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
