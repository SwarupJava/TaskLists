import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyledemoComponent } from './styledemo/styledemo.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StyledemoComponent,
    EventdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EventdemoComponent]
})
export class AppModule { }
