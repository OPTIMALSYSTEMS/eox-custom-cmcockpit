import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {EoCoreModule} from '@eo-sdk/core';
import { AppBarComponent } from './app-bar/app-bar.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppBarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EoCoreModule.forRoot({
      "main": ["assets/_default/config/main.json"],
      "translations": ["assets/_default/i18n/"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
