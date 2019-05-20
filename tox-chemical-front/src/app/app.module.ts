import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginService } from './services/login.service';
import { TicketService } from './services/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule, MatCardModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewInOutComponent } from './gate/new-in-out/new-in-out.component';
import { AvailabilityComponent } from './gate/availability/availability.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GateComponent } from './gate/gate.component';
import { AuthGuard } from './guards/auth.guard';
import { WarehouseGuard } from './guards/warehouse.guard';
import { LoginComponent } from './login/login.component';
import { Wh1Component } from './warehouses/wh1/wh1.component';
import { Wh2Component } from './warehouses/wh2/wh2.component';
import { StorageLocationComponent } from './gate/storage-location/storage-location.component';

@NgModule({
  declarations: [
    AppComponent,
    NewInOutComponent,
    AvailabilityComponent,
    PageNotFoundComponent,
    GateComponent,
    LoginComponent,
    Wh1Component,
    Wh2Component,
    StorageLocationComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule
  ],
  providers: [LoginService, TicketService, AuthGuard, WarehouseGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
