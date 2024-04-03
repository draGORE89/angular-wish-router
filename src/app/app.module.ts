import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';
import { WishModule } from './wish/wish.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { AuthInterceptor } from 'src/shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    SecondComponent,
    // NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    // ContactModule,
    // ProductsModule,
    // WishModule
  ],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
