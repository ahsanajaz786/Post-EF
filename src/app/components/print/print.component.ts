import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from './../../interfaces/ApiResponse';

import { SaleService } from 'src/app/services/sale.service';
interface IPrintData{
  documentNo:string,
  cretedDate:string,
  itemAmount:string,
  itemName:string,
  qty:number,
  totalAmountPay:string,
  unitPrice:number

}
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  invoiceid=''
  qrcodeUrl=''

  data:IPrintData[]=[]
  constructor(private SaleService:SaleService,private router:ActivatedRoute) { }
  ngOnInit(): void {
    this.router.queryParams.subscribe((q:any)=>{
      this.invoiceid=q.id
      this.qrcodeUrl='http://localhost:4200/print?id'+this.invoiceid
      this.loadData()

    })
  }
  loadData()
  {
    this.SaleService.printInvoice(this.invoiceid).subscribe((d:ApiResponse)=>{
      this.data=d.payload

    })
  }

}
