import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model/product';
import { FilterViewModel } from '../ViewModel/FilterViewModel';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';ru
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product: Product;
  @Input() filterViewModel:FilterViewModel;
  isShownDesc:boolean = false;

  constructor() { }

  ngOnInit() {
    registerLocaleData( ru );
  }

}
