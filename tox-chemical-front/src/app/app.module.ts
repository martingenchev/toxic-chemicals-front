import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginService } from './services/login.service';
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
import { LoginComponent } from './login/login.component';
import { Wh1Component } from './warehouse/wh1/wh1.component';

@NgModule({
  declarations: [
    AppComponent,
    NewInOutComponent,
    AvailabilityComponent,
    PageNotFoundComponent,
    GateComponent,
    LoginComponent,
    Wh1Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
