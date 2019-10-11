import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../filters.service';
import { Filter } from '../Model/filter';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  filters:Filter[];

  constructor(private filtersService:FiltersService) { }

  ngOnInit() {
    this.filtersService.getFilters().subscribe((data:Filter[]) => this.filters = data);
  }

}
