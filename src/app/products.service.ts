import { Injectable } from '@angular/core';
import { IProduct } from './product-list/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  productUrl : string ='/assets/products.json';
  constructor(private http : HttpClient) { }

  getProducts() :Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl);
  }
}