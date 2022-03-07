import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedByAppModule } from 'src/app/shared-by-app/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input'; // using this for phone number in form

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedByAppModule,
    NgxIntlTelInputModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
