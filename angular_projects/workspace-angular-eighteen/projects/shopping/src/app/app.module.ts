import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyledemoComponent } from './styledemo/styledemo.component';

@NgModule({
  declarations: [
    AppComponent,
    StyledemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StyledemoComponent]
})
export class AppModule { }
