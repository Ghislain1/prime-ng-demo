import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeDashboardComponent },

];


@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
