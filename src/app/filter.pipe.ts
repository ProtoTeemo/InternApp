import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Model/product';
import { FilterViewModel } from './ViewModel/FilterViewModel';
import { Filter } from './Model/filter';
import { ProductsService } from './products.service';

@Pipe({
    name: "filter",
    pure: false
})
export class FilterPipe implements PipeTransform{

    transform(products:Product[], filters:{ filter:Filter, selectedOption:string}[]) {        
        if(filters.length > 0){
            let isCorrect = false;
            // need to refactoring
            let result = products.filter(product => {
                
                let producerFilters = filters.filter(f => {
                    return f.filter.propName == "producer";
                });
                let driveTypeFilters = filters.filter(f => {
                    return f.filter.propName == "driveType";
                });

                let isCorrect:boolean = false;

                if(producerFilters.length > 0){
                    for (let filter of producerFilters) {
                        if(product.prdoucer == filter.selectedOption)
                            isCorrect = true;
                    }
                    if(!isCorrect) return false;
                }


                if(driveTypeFilters.length > 0){
                    for (let filter of driveTypeFilters) {
                        if(product.driveType == filter.selectedOption)
                            isCorrect = true;
                        else
                            return false;   
                    }
                }
                return isCorrect;
            });
            return result;
        }
        else
            return products;
    }

}