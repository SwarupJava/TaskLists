import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentprojectionComponent } from './components/contentprojection/contentprojection.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentprojectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContentprojectionComponent]
})
export class AppModule { }
