import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://dummyjson.com/products';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  getCategories(): Observable<any> {
    return this._http.get(`${this.baseUrl}/categories`);
  }
}
