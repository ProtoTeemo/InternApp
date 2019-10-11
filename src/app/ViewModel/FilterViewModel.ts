import { Filter } from '../Model/filter';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';

export class FilterViewModel{
    constructor() {
        
    }
    curFilters:
        { filter:Filter, selectedOption:string}[];
}