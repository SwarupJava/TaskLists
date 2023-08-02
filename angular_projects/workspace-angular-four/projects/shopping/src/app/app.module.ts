import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixregisterComponent } from './components/netflixregister/netflixregister.component';
import { NetflixmainComponent } from './components/netflixmain/netflixmain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NetflixregisterComponent,
    NetflixmainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NetflixmainComponent, HomeComponent, NetflixregisterComponent]
})
export class AppModule { }
