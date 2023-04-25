import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {DatePipe, DecimalPipe, HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
     DatePipe,
     DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
