import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GateComponent } from './gate/gate.component';
import { NewInOutComponent } from './new-in-out/new-in-out.component';
import { AvailabilityComponent } from './availability/availability.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gate', 
    component: GateComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: NewInOutComponent
      },
      {
        path: 'availability',
        component: AvailabilityComponent
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
