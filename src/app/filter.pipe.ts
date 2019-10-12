import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/product';
import { FilterViewModel } from './ViewModel/FilterViewModel';
import { Filter } from './Model/filter';

@Pipe({
    name: "filter"
})
export class FilterPipe implements PipeTransform{

    transform(products:Product[], filters:{ filter:Filter, selectedOption:string}[]) {
        if(filters.length > 0){
            console.log("In the pipe условие:", filters[0].selectedOption);
            let result = products.filter(product => {
                for (let filter of filters) {
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