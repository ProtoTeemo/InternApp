import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/product';
import { Filter } from './Model/filter';
import { FilterViewModel } from './ViewModel/FilterViewModel';

@Pipe({
    name: "filter"
})
export class FilterPipe implements PipeTransform{

    transform(data:Product[], curFilters:FilterViewModel) {
        return data.filter(product => {
            for (let filter of curFilters.curFilters) {
                if(product[filter.filter.propName] != filter.selectedOption)
                return false;
            }
            return true;
        });
    }

}