import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  public isCollapsed = false;
  constructor( private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data:Product[]) => {this.products = data});
  }

}
