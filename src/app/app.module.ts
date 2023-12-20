import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AocComponent } from './components/aoc/aoc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { OneOneComponent } from './components/aoc/days/one-one/one-one.component';
import { OneTwoComponent } from './components/aoc/days/one-two/one-two.component';
import { TwoComponent } from './components/aoc/days/two/two.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AocComponent,
    OneOneComponent,
    OneTwoComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
