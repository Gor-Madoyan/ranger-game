import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RangersButtonsComponent } from './rangers-buttons/rangers-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    RangersButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
