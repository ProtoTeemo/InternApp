import { Component, OnInit, Input } from '@angular/core';
import { Filter } from '../Model/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filter:Filter;

  isCollapsed:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
