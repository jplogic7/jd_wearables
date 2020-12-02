import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-list-page/product-detail/product-detail.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { TrashListComponent } from './trash-list/trash-list.component';


const routes: Routes = [
  { path: 'home', component: ProductListPageComponent },
  { path: 'trash', component: TrashListComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ProductListPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
