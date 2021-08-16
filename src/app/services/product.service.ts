import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: String = 'https://localhost:44383/api/products/';
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategoryId(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
