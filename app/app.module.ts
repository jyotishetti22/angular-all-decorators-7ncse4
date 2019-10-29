import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list.component';
import { CarComponent } from './car.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CarListComponent, CarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
