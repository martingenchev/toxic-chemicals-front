import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewInOutComponent } from './new-in-out/new-in-out.component';
import { AvailabilityComponent } from './availability/availability.component';

const routes: Routes = [
  {
    path: '',
    component: NewInOutComponent
  },
  {
    path: 'availability',
    component: AvailabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
