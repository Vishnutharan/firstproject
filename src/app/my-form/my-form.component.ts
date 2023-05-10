import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  products: Product[] = [];
  productForm: boolean = false;
  editProductForm: boolean = false;
  isNewForm: boolean = false;
  editedProduct: any = {};
  newdelete: any = {};
  angForm: any;
  angEdit: any = {};
  isAdd: boolean = false;
  promtData: any;
  isMgs: any; 
  isEdit: any;
  resetprd: any = {};

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    if (data.btnType == 'Add') {
      this.isAdd = true;
      this.isMgs = true;
      this.isEdit = false;
    } else {
      this.isAdd = false;
      this.isMgs = false;
      this.isEdit = true;
    }
    this.promtData = data;
  }

  ngOnInit() {
    this.createForm();
    if (this.promtData && this.promtData.id) {
      this.patchForm(this.promtData);
    }
  }

  createForm() {
    this.angForm = new FormGroup({
      id   : new FormControl('', [ Validators.required, Validators.minLength(0), Validators.maxLength(100), ]),
      name : new FormControl('', [Validators.required]), description: new FormControl('', [Validators.required]),
      price: new FormControl('', [ Validators.required, Validators.minLength(10), Validators.maxLength(10000), ]),
    });
  }

  patchForm(patchValues: any) {
    this.angForm.get('id').setValue(patchValues.id);
    this.angForm.get('name').setValue(patchValues.name);
    this.angForm.get('description').setValue(patchValues.description);
    this.angForm.get('price').setValue(patchValues.price);
  }

  onSubmit(angForm: FormGroup) {
    if (this.isAdd) {
      this.productService.pItems.push(angForm.value);
    } else {
      this.productService.updateProduct(angForm.value);
    }
  }

  resetProduct(): void {
    this.angForm.reset();
  }
}
