import { Injectable } from '@angular/core';
import { Product } from 'src/product';
import { PRODUCT_ITEMS } from './product-data';
import { findIndex } from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  public pItems = PRODUCT_ITEMS;
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  getData(): Observable<any> {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get<any>(url);
  }

  getProductsFromData(): Product[] {
    console.log(this.pItems);
    return this.pItems;
  }

  addProduct(addproduct: Product) {
    this.pItems.push(addproduct);
    console.log(this.pItems);
  }

  updateProduct(upproduct: Product) {
    let index = findIndex(this.pItems, (pid: Product) => {
      return pid.id === upproduct.id;
    });
    this.pItems[index] = upproduct;
  }

  deleteProduct(deproduct: Product) {
    this.pItems.splice(this.pItems.indexOf(deproduct), 1);
    console.log(this.pItems);
  }
}
