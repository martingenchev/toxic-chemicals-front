import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import { LoginService } from './services/login.service';
import { TicketService } from './services/ticket.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule, MatCardModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule , MatTableModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvailabilityComponent } from './gate/availability/availability.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GateComponent } from './gate/gate.component';
import { AuthGuard } from './guards/auth.guard';
import { WarehouseGuard } from './guards/warehouse.guard';
import { LoginComponent } from './login/login.component';
import { StorageLocationComponent } from './gate/storage-location/storage-location.component';
import { HttpClientModule } from '@angular/common/http';
import {WarehouseService} from './services/warehouse.service';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { TypePipe } from './pipes/type.pipe';
import { InOutPipe } from './pipes/in-out.pipe';
import { WarehouseInventoryComponent } from './warehouse-inventory/warehouse-inventory.component';
import {availabilityReducer} from './gate/availability/store/availability.reducer';
import {WarehouseReducer} from "./gate/storage-location/store/warehouse.reducer";

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    PageNotFoundComponent,
    GateComponent,
    LoginComponent,
    StorageLocationComponent,
    WarehouseComponent,
    TypePipe,
    InOutPipe,
    WarehouseInventoryComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({availabilityList: availabilityReducer, warehouseList: WarehouseReducer}),
    MatRadioModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule
  ],
  providers: [LoginService, TicketService, WarehouseService , AuthGuard , WarehouseGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
