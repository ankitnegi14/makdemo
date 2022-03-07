import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '../home/home.module';
import { CommonComponentModule } from '../shared-by-app/components/common-components/common-component.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../account/login';
import { SignupModule } from '../account/signup';
import { ForgotModule } from '../account/forgot/forgot.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentModule,
    HomeModule,
    NgxSpinnerModule,
    LoginModule,
    SignupModule,
    ForgotModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
