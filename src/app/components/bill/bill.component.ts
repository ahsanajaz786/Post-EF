import { ApiResponse } from './../../interfaces/ApiResponse';
import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/IItem';
  import { ItemModel } from 'src/app/models/item-model';
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
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  invoiceidforprint=''
  qrcodeUrl='http://localhost:4200/print?id'+this.invoiceidforprint

  pData:IPrintData[]=[]
  itemData:IItem[]=[]

  item:IItem={
    amount:0,
    description:"",
    barcode:"",
    price:0,
    qty:0,
    unit:"PCS",

  }
  total=0
  today=new Date()
  year = this.today.getFullYear();
   mes = this.today.getMonth()+1;
 dia = this.today.getDate();
  date=this.dia+"-"+this.mes+"-"+this.year;
  time=this.today.getHours()+"-"+this.today.getMinutes()+"-"+this.today.getSeconds()
  invoiceId=''
  constructor(private saleService:SaleService) {

   }

  ngOnInit() {
    this.getInvoiceNumber()


  }
  remove(i:number)
  {
   this.itemData=this.itemData.filter((o,indx)=>i!=indx)
   this.total=0
   this.itemData.map(d=>{
     this.total+=d.amount
   })

  }
  saleChange()
  {
    this.saleService.getItemById(this.item.barcode).subscribe((d:ApiResponse)=>{

      if(d.errorCode=="0" &&d.payload.length>0)
      {
        this.item.description=d.payload[0].name
        this.item.price=d.payload[0].price
      }

    })

  }
  getInvoiceNumber()
  {
    this.saleService.getInvoiceNumber().subscribe((res:any)=>{
    this.invoiceId=res
    })
  }
  loadData()
  {
    this.saleService.printInvoice(this.invoiceidforprint).subscribe((d:ApiResponse)=>{
      this.pData=d.payload
      setTimeout(() => {
        this.print()
      }, 300);

    })
  }
  print()
  {
    var ele=document.body.innerHTML
    var prtContent:any = document.getElementById("pritContaner");

    document.body.innerHTML=prtContent.innerHTML
    window.print()
    document.body.innerHTML=ele


  }
  addSale(){
    if(this.itemData.length==0)
    {
      return
    }
      this.saleService.addSale(this.itemData).subscribe((d:ApiResponse)=>{
        if(d.errorCode=="0")
        {
          this.total=0
          this.itemData=[]
          alert('Sale Added')
          this.getInvoiceNumber()
          this.invoiceidforprint=d.payload
          this.qrcodeUrl='http://localhost:4200/print?id='+d.payload
          this.loadData()


        }

    })

  }
  enter(){
    if(this.item.barcode=="" && this.item.price==0)
    {
   return
    }
    if(this.itemData.some(o=>o.barcode==this.item.barcode))
    {
      this.itemData.map(i=>(
        i.qty+=this.item.qty,

        i.amount=this.item.price*i.qty
      ))

    }else{
    this.item.amount=this.item.price*this.item.qty
    this.total+= this.item.amount
    this.itemData.push(this.item)
    }
    this.item={
      amount:0,
      description:"",
      barcode:"",
      price:0,
      qty:0,
      unit:"PCS",

    }

  }

}
