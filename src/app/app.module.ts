import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillComponent } from './components/bill/bill.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintComponent } from './components/print/print.component';

import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,BillComponent,LoginComponent, PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,


    FormsModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
