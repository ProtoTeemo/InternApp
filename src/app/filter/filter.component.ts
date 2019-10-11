import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../Model/filter';
import { FilterViewModel } from '../ViewModel/FilterViewModel';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterViewModel:FilterViewModel;

  setFilter(curFilter:Filter, selectedOption:string, event){
    if(event.target.checked)
    {
      if(!this.filterViewModel || !this.filterViewModel.curFilters)
      {
        this.filterViewModel = new FilterViewModel();
        this.filterViewModel.curFilters = new Array<{ filter:Filter, selectedOption:string }>();
      }
      console.log("In filter comp.: ", this.filterViewModel)
      this.filterViewModel.curFilters.push( { filter: curFilter, selectedOption: selectedOption });
    }
  }
  
  @Input() filter:Filter;

  isCollapsed:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
