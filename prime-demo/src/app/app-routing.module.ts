import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStartedComponent } from './components/get-started/get-started.component';

const routes: Routes = [
  { path: 'started', component: GetStartedComponent },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then(m => m.CarModule),

  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
