import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { SitebarComponent } from './layout/sitebar/sitebar.component';
import { DashboradComponent } from './page/dashborad/dashborad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SitebarComponent,
    DashboradComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
