import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DatabindingComponent]
})
export class AppModule { }
