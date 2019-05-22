import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GateComponent } from './gate/gate.component';
import { AvailabilityComponent } from './gate/availability/availability.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { WarehouseGuard } from './guards/warehouse.guard';
import { LoginComponent } from './login/login.component';
import { StorageLocationComponent } from './gate/storage-location/storage-location.component';
import {WarehouseComponent} from './warehouse/warehouse.component';


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
        component: AvailabilityComponent
      },
      {
        path: 'location',
        component: StorageLocationComponent
      }
    ]
  },

  { path: 'warehouse',
  component: WarehouseComponent,
  canActivate: [WarehouseGuard]
  },


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
