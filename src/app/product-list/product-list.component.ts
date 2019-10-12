import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../Model/product';
import { FilterViewModel } from '../ViewModel/FilterViewModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("О ЧУДО, ЧТО-ТО ПОМЕНЯЛОСЬ: ", changes);
  }

  products:Product[]; 
  @Input() filterViewModel:FilterViewModel;

  constructor( private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data:Product[]) => {this.products = data});
  }

  

}
