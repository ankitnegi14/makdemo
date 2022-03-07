import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InnerNavbarComponent } from './inner-navbar/inner-navbar.component';
import { SharedByAppModule } from '../../shared.module';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    InnerNavbarComponent,

  ],
  imports: [
    CommonModule,
    SharedByAppModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    InnerNavbarComponent
  ]
})
export class CommonComponentModule { }
