import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interfaces/ApiResponse';


@Injectable({
  providedIn: 'root'
})
export class SaleService {
   baseUrl="https://localhost:44344/api/"

  constructor(private http:HttpClient) { }
  getItemById(id:any)
  {
    return this.http.get<ApiResponse>(`${this.baseUrl}Sale/GetItemById?id=${id}`)
  }
  getInvoiceNumber()
  {
    return this.http.get<ApiResponse>(`${this.baseUrl}Sale/getInvoiceNumber`)
  }
  printInvoice(id:any)
  {
    return this.http.get<ApiResponse>(`${this.baseUrl}Sale/printInvoice?id=${id}`)
  }
  addSale(data:any)
  {
    return this.http.post<ApiResponse>(`${this.baseUrl}Sale/AddSale`,data)
  }

}
