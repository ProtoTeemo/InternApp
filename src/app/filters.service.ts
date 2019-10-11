import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private httpService: HttpClient) { }

  getFilters(){
    return this.httpService.get('./assets/filters.json');
  }
}
