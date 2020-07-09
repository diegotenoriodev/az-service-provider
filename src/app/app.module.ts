import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgpSortModule } from "ngp-sort-pipe";

import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './auth/token.interceptor';

import { AuthService } from './auth/auth.service';
import { UsersService } from './services/users.service';

import { HeaderComponent } from './components/shared/header/header.component';
import { CategoriesMenuComponent } from './components/shared/categories-menu/categories-menu.component';
import { SearchBoxComponent } from './components/shared/search-box/search-box.component';
import { RatingsComponent } from './components/shared/ratings/ratings.component';
import { ServiceProviderCardComponent } from './components/shared/service-provider/service-provider-cards.component';
import { SideMenuComponent } from './components/shared/side-menu/side-menu.component';
import { ServiceProviderServce } from './services/service-providers.service';
import { LocationService } from './services/location.service';
import { LocationPickerComponent } from './components/shared/location-picker/location-picker.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { RegisterComponent } from './components/views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    
    HeaderComponent,
    CategoriesMenuComponent,
    SearchBoxComponent,
    RatingsComponent,
    ServiceProviderCardComponent,
    SideMenuComponent,
    LocationPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgpSortModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ServiceProviderServce,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UsersService,
    LocationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
