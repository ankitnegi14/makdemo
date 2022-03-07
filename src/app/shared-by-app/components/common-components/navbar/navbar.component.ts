import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/account/login/login.service';
import { SignupService } from 'src/app/account/signup/signup.service';


@Component({
  selector: 'navbar-ui',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../../../shared-css/static-page.css']
})
export class NavbarComponent implements OnInit {
  showNavbar: boolean = false;
  isOverlay: boolean = false;

  constructor(
    private el: ElementRef,
    private router: Router,
    private modalService: LoginService,
    public signupService: SignupService
  ) { }

  ngOnInit(): void {

  }

  showHideNavbar(action: string) {
    switch (action) {
      case 'show':
        var html = this.el.nativeElement.childNodes[0];
        html.setAttribute('style', 'right: 20em');
        this.showNavbar = true;
        this.isOverlay = true;
        break;
      case 'hide':
        var html = this.el.nativeElement.childNodes[0];
        html.setAttribute('style', 'right: 0em');
        this.showNavbar = false;
        this.isOverlay = false;
        break;
    }
  }

  redirect(page: string) {
    this.router.navigateByUrl(page);
  }

  openModal(id: string) {
    this.showHideNavbar('hide');
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openSignUpModal(id: string) {
    this.showHideNavbar('hide');
    this.signupService.open(id);
  }

  closeSignUpModal(id: string) {
    this.signupService.close(id);
  }

}
