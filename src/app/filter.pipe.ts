import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/product';
import { FilterViewModel } from './ViewModel/FilterViewModel';

@Pipe({
    name: "filter"
})
export class FilterPipe implements PipeTransform{

    transform(products:Product[], filterViewModel:FilterViewModel) {
        console.log("In the pipe:", filterViewModel);
        if(filterViewModel.curFilters.length > 0){
            let result = products.filter(product => {
                for (let filter of filterViewModel.curFilters) {
                    console.log("In the pipe условие:", product[filter.filter.propName] != filter.selectedOption);
                    if(product[filter.filter.propName] != filter.selectedOption)
                        return false;
                }
                return true;
            });
            return result;
        }
        else
            return products;
    }

}