import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/product';
import { FilterViewModel } from './ViewModel/FilterViewModel';
import { Filter } from './Model/filter';

@Pipe({
    name: "filter",
    pure: false
})
export class FilterPipe implements PipeTransform{

    transform(products:Product[], filters:{ filter:Filter, selectedOption:string}[]) {
        if(filters.length > 0){
            let result = products.filter(product => {
                for (let filter of filters) {
                    switch (filter.filter.propName) {
                        case "producer":
                            return product.prdoucer == filter.selectedOption;
                        case "driveType":
                            return product.driveType == filter.selectedOption;
                        default:
                            return false;
                            break;
                    }
                }
            });
            return result;
        }
        else
            return products;
    }

}