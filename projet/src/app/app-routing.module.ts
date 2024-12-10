import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanierComponent } from './components/panier/panier.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

  {path: 'panier' ,component : PanierComponent},
  {path: 'products' ,component : ProductsComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
