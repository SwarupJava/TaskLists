import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrackingdemoComponent } from './components/trackingdemo/trackingdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingdemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TrackingdemoComponent]
})
export class AppModule { }
