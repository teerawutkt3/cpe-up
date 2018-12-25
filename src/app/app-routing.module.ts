import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboradComponent } from './page/dashborad/dashborad.component';
import { ChartComponent } from './page/chart/chart.component';

const routes: Routes = [
  { path: '', component: DashboradComponent },
  { path: 'dashboard', component: DashboradComponent },
  { path: 'chart', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
