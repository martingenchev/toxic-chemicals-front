import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GateComponent } from './gate/gate.component';
import { NewInOutComponent } from './gate/new-in-out/new-in-out.component';
import { AvailabilityComponent } from './gate/availability/availability.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { WarehouseGuard } from './guards/warehouse.guard';
import { LoginComponent } from './login/login.component';
import { Wh1Component } from './warehouse/wh1/wh1.component';

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
  { path: 'wh1', 
  component: Wh1Component,
  canActivate: [WarehouseGuard]
  },
  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
