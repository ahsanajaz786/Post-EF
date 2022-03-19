import { PrintComponent } from './components/print/print.component';
import { BillComponent } from './components/bill/bill.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'login',
  component:LoginComponent
},
{
path:'bill',
component:BillComponent
},
{path:'print',
component:PrintComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
