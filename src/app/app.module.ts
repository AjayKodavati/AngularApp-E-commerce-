import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { ViewMobilesComponent } from './view-mobiles/view-mobiles.component';
import { AddNewMobileComponent } from './add-new-mobile/add-new-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    MobilesComponent,
    BikesComponent,
    LaptopsComponent,
    PagenotfoundComponent,
    TestComponent,
    UserDetailsComponent,
    UsersComponent,
    ViewMobilesComponent,
    AddNewMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
