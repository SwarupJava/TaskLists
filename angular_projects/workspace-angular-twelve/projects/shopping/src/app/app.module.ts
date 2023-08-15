import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';

@NgModule({
  declarations: [
    AppComponent,
    FordemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FordemoComponent]
})
export class AppModule { }
