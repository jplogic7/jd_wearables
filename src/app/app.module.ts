import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { TrashListComponent } from './trash-list/trash-list.component';
import { ProductDetailComponent } from './product-list-page/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    TrashListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
