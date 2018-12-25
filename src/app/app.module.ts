import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { SitebarComponent } from './layout/sitebar/sitebar.component';
import { DashboradComponent } from './page/dashborad/dashborad.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ButtonComponent } from './components/button/button.component';
import { ChartComponent } from './page/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SitebarComponent,
    DashboradComponent,
    ConfirmComponent,
    ButtonComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
