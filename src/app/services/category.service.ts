import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: String = 'https://localhost:44383/api/categories/';
  constructor(private httpClient:HttpClient) { } 
  getCategories(): Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
  
}
