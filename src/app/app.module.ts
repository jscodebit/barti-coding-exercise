import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClientService } from './services/http-client.service';
import { HomeComponent } from './container/home/home.component';
import { DisplayPatientDataComponent } from './container/display-patient-data/display-patient-data.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: ':route/:direction/:stop', component: DisplayTableComponent, pathMatch: 'full' },
  { path: ':patient_name', component: DisplayPatientDataComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayPatientDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
