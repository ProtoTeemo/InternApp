import { Component } from '@angular/core';
import { FilterViewModel } from './ViewModel/FilterViewModel';
import { Filter } from './Model/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *
   */
  constructor() {
    this.filterViewModel = new FilterViewModel();
    this.filterViewModel.curFilters = new Array<{ filter:Filter, selectedOption:string }>();
    console.log("In main comp.: ", this.filterViewModel)
    
  }
  title = 'InternApp';
  filterViewModel:FilterViewModel;
}
