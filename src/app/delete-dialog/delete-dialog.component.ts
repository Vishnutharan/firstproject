import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent {
  products: Product[] = [];
  

  constructor(
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any, 
   /*  public _dialogRef: MatDialogRef<DeleteDialogComponent>  */
     ) {}

  product = this.data;
  ngOnint(): void {}
  onDelete(product: Product) {
  this.productService.deleteProduct(product);

  }
}
