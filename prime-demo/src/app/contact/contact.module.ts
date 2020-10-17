import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { GMapModule } from 'primeng/gmap';


const routes: Routes = [
  { path: '', component: ContactComponent },

];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GMapModule
  ]
})
export class ContactModule { }
