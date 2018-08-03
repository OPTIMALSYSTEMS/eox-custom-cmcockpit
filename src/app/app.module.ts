import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {EoCoreModule} from '@eo-sdk/core';
import { AppBarComponent } from './app-bar/app-bar.component';
import { LogoComponent } from './logo/logo.component';
import { LangSwitchComponent } from './lang-switch/lang-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppBarComponent,
    LogoComponent,
    LangSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EoCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
