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
    if(event.target.checked){
      this.filterViewModel.curFilters.push( { filter: curFilter, selectedOption: selectedOption });
    }
    else{
      console.log("Before delete: ", this.filterViewModel.curFilters)
      if(this.filterViewModel.curFilters.length <= 1){
        this.filterViewModel.curFilters = new Array<{ filter:Filter, selectedOption:string }>();
      }else
      {
        let removedFilterIndex = this.filterViewModel.curFilters.findIndex(f => f.selectedOption == selectedOption);
        console.log(`deleted index: ${removedFilterIndex} by selectedOption: ${selectedOption}`);
        this.filterViewModel.curFilters.splice(removedFilterIndex, 1);     
      }
    }

    console.log("Filters:", this.filterViewModel.curFilters); 
  }
  
  checkOption(option):boolean{
    return this.filterViewModel.curFilters.findIndex(f => f.selectedOption == option) != -1;
  }

  @Input() filter:Filter;

  isCollapsed:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
