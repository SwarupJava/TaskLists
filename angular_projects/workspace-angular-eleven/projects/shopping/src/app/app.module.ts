import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchdemoComponent } from './components/switchdemo/switchdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchdemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SwitchdemoComponent]
})
export class AppModule { }
