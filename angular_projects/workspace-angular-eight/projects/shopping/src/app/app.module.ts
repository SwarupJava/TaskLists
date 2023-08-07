import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FakestoreComponent } from './components/fakestore/fakestore.component';

@NgModule({
  declarations: [
    AppComponent,
    FakestoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FakestoreComponent]
})
export class AppModule { }
