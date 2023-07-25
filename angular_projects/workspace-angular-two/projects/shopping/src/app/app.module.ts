import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponet } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RegisterComponet, LoginComponent]
})
export class AppModule { }
