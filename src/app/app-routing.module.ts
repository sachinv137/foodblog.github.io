import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './custom-container/rapper/contact/contact.component';
import { ProductsComponent } from './custom-container/rapper/products/buy-products/products.component';
import { BuyProduct2Component } from './custom-container/rapper/products/buy-product2/buy-product2.component';
import { AboutComponent } from './custom-container/rapper/about/about.component';
import { HomeComponentComponent } from './custom-container/rapper/home-component/home-component.component';
import { ServicesComponent } from './custom-container/rapper/services/services.component';
import { PageNotFoundComponent } from './custom-container/rapper/page-not-found/page-not-found.component';
import { OursubscribersComponent } from './custom-container/rapper/oursubscribers/oursubscribers.component';
import { CreateProductComponent } from './custom-container/rapper/products/create-product/create-product.component';
import { BehaviorComponent } from './custom-container/rapper/products/behavior/behavior/behavior.component';
import { SigninComponent } from './custom-container/rapper/signin/signin.component';
import { ServiceDetailComponent } from './custom-container/rapper/services/service-detail/service-detail.component';
import { ProductDetailComponent } from './custom-container/rapper/products/buy-product2/product-detail/product-detail.component';
import { ReactiveFormComponent } from './custom-container/rapper/reactive-form/reactive-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'products/buy-product', component: ProductsComponent },
  { path: 'products/buy-product2', children : [
    { path: '', component: BuyProduct2Component },
    { path: ':id', component: ProductDetailComponent }
  ] },
  { path: 'products/create-product', component: CreateProductComponent },
  { path: 'products/behavior', component: BehaviorComponent },
  { path: 'products/contactform2', component: ReactiveFormComponent },
  {
    path: 'recipes', children : [
    { path: '', component: ServicesComponent},
      { path: ':id', component: ServiceDetailComponent }
  ] },
  { path: 'contact', component: ContactComponent },
  { path: 'subscribers', component: OursubscribersComponent }, 
  { path: 'signin', component: SigninComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
