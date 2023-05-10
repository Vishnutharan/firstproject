import { Component } from '@angular/core';
import { product } from '../product/product';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  products!:Array<any>;
  totalRecords:number=10
  page:number=1

  constructor(private ProductService: ProductService) {
    this.products = new Array<any>()
  }

  getUsers(){
    this.ProductService.getData().subscribe((data) => {
      console.log(data);
      this.products = data;
    })
  }
}

