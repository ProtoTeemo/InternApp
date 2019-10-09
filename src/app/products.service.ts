import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private httpService: HttpClient) { }

  getProducts(){
    return this.httpService.get('./assets/products.json');    
  }
}
