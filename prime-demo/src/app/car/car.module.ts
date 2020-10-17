import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarDashboardComponent } from './components/car-dashboard/car-dashboard.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ProgressBarModule } from 'primeng/progressbar';


const routes: Routes = [
  { path: '', component: CarDashboardComponent },

];

@NgModule({
  declarations: [CarDashboardComponent, CarListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProgressBarModule
  ],
  exports: [CarDashboardComponent]
})
export class CarModule { }
