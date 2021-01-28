import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RapperComponent } from './custom-container/rapper/rapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './custom-container/rapper/top-nav/top-nav.component';
import { HomeComponentComponent } from './custom-container/rapper/home-component/home-component.component';
import { AboutComponent } from './custom-container/rapper/about/about.component';
import { ProductsComponent } from './custom-container/rapper/products/buy-products/products.component';
import { ServicesComponent } from './custom-container/rapper/services/services.component';
import { ContactComponent } from './custom-container/rapper/contact/contact.component';
import { PageNotFoundComponent } from './custom-container/rapper/page-not-found/page-not-found.component';
import { OursubscribersComponent } from './custom-container/rapper/oursubscribers/oursubscribers.component';
import { CardComponent } from './custom-container/rapper/oursubscribers/card/card.component';
import { ChildComponent } from './custom-container/rapper/products/buy-products/child/child.component';
import { MyserviceService } from './custom-container/rapper/myservice/myservice.service';
import { CreateProductComponent } from './custom-container/rapper/products/create-product/create-product.component';
import { ProductChildComponent } from './custom-container/rapper/products/create-product/product-child/product-child/product-child.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorComponent } from './custom-container/rapper/products/behavior/behavior/behavior.component';
import { BoxoneComponent } from './custom-container/rapper/products/behavior/boxone/boxone.component';
import { BoxtwoComponent } from './custom-container/rapper/products/behavior/boxtwo/boxtwo.component';
import { BoxthreeComponent } from './custom-container/rapper/products/behavior/boxthree/boxthree.component';
import { BoxfourComponent } from './custom-container/rapper/products/behavior/boxfour/boxfour.component';
import { ChildlifeComponent } from './custom-container/rapper/products/behavior/childlife/childlife.component';
import { SigninComponent } from './custom-container/rapper/signin/signin.component';
import { BuyProduct2Component } from './custom-container/rapper/products/buy-product2/buy-product2.component';
import { Recipes } from './custom-container/rapper/my-modal/recipes';
import { ServiceDetailComponent } from './custom-container/rapper/services/service-detail/service-detail.component';
import { Products } from './custom-container/rapper/my-modal/products';
import { ProductDetailComponent } from './custom-container/rapper/products/buy-product2/product-detail/product-detail.component';
import { ReactiveFormComponent } from './custom-container/rapper/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RapperComponent,
    TopNavComponent,
    HomeComponentComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    PageNotFoundComponent,
    OursubscribersComponent,
    CardComponent,
    ChildComponent,
    CreateProductComponent,
    ProductChildComponent,
    BehaviorComponent,
    BoxoneComponent,
    BoxtwoComponent,
    BoxthreeComponent,
    BoxfourComponent,
    ChildlifeComponent,
    SigninComponent,
    BuyProduct2Component,
    ServiceDetailComponent,
    ProductDetailComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyserviceService, Recipes, Products],
  bootstrap: [AppComponent]
})
export class AppModule { }
