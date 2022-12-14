import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { E404Component } from './e404/e404.component';
import { AboutComponent } from './about/about.component';
import { FootComponent } from './foot/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    E404Component,
    AboutComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
