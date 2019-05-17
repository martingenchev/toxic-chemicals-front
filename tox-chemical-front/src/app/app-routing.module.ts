import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GateComponent } from './gate/gate.component';
import { NewInOutComponent } from './new-in-out/new-in-out.component';
import { AvailabilityComponent } from './availability/availability.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gate', 
    pathMatch: 'full'
  },
  {
    path: 'gate', 
    component: GateComponent,
    children: [
      {
        path: '',
        component: NewInOutComponent
      },
      {
        path: 'availability',
        component: AvailabilityComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
