import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { ContentprojectionComponent } from './components/contentprojection/contentprojection.component';

@NgModule({
  declarations: [
    AppComponent,
    IfdemoComponent,
    ContentprojectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContentprojectionComponent]
})
export class AppModule { }
