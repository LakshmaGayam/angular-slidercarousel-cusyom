import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SliderComponent } from './slider/slider.component';
import { SliderItemDirective } from './slider/slider-item.directive';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [ AppComponent, HelloComponent, SliderComponent, SliderItemDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
