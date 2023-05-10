import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ProductService } from './product.service';
import { MyFormComponent } from '../my-form/my-form.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/product';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { result } from 'lodash';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productForm: boolean = false;
  editProductForm: boolean = false;
  newProduct: any = {};
  editedProduct: any = {};
  angForm: any = {};
  isNewForm: boolean = false;
  newdelete: any = {};
  angEdit: any;

  // Pagination
  totalLength: any;
  page: number = 1;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.products;
    this.products = this.productService.pItems;
    this.totalLength = result.length;
  }

  openDialog(param: string, product: any = null) {
    const dialogConfig = new MatDialogConfig();
    let tempData;
    if (product != null) {
      tempData = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        btnType: param,
      };
    } 
    else {
      tempData = {
        id: '',
        name: '',
        description: '',
        price: '',
        btnType: param,
      };
    }

    dialogConfig.data = {};
    this.dialog.open(MyFormComponent, {
      width: '100%',
      height: 'auto',
      hasBackdrop: true,
      maxHeight: '100%',
      data: tempData,
    });
  }

  DeleteDialog(delprd: product){
    this.dialog.open(DeleteDialogComponent,{
      width: '100%',
      height: 'auto%',
      // hasBackdrop: true,
      maxHeight: 'auto',
    });
  }
}


