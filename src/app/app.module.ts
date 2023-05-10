import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyFormComponent } from './my-form/my-form.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NameEditerComponent } from './name-editer/name-editer.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule} from'@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DataBindingComponent,
    NameEditerComponent,
    MyFormComponent,
    DeleteDialogComponent,
    PaginationComponent,
    CustomerDetailsComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponentComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot(),
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers      : [ProductService, NgxSmartModalService],
  bootstrap      : [AppComponent],
  entryComponents: [MyFormComponent, DeleteDialogComponent],
})
export class AppModule {}
