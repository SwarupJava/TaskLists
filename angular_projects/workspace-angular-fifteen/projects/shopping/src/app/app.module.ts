import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ShoppingcartComponent]
})
export class AppModule { }
