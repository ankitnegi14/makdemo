import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ForgotService } from '../forgot/forgot.service';
import { SignupService } from '../signup';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'login-ui',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.less'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @Input() id: string | undefined;
  isClickBackGround: boolean = false;
  loginForm!: FormGroup;
  submitted = false;
  public loginObj: LoginModel = <LoginModel>{};
  errorlog = false;
  errormsg: string = '';
  private element: any;
  showPassword: boolean = false;
  showpwd: any;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: LoginService,
    public signupService: SignupService,
    private el: ElementRef,
    private spinner: NgxSpinnerService,
    public forgotService: ForgotService
  ) {
    this.element = el.nativeElement;
  }


  ngOnInit(): void {
    this.initializeLoginForm();
    console.log("******************" + this.id);
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);


    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  initializeLoginForm() {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });
  }

  //validation
  get f() { return this.loginForm.controls; }

  // on login form submit
  onSubmitLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.spinner.show();
      this.loginObj.email = this.loginForm.get('email')?.value
      this.loginObj.password = this.loginForm.get('password')?.value;
    }
  }


  // open modal
  open(): void {
    this.isClickBackGround = true;
    this.submitted = false;
    this.errorlog = false;
    this.loginForm.reset();
    this.errormsg = '';
    this.element.style.display = 'block';
    document.body.classList.add('login-ui-open');
  }

  // close modal
  close(): void {
    this.isClickBackGround = false;
    this.element.style.display = 'none';
    document.body.classList.remove('login-ui-open');
  }

  //create account
  openSignUpModal(id: string) {
    this.close();
    this.signupService.open(id);
  }

  //it send this id to open() in forgotService 
  openForgotModal(id: string) {
    this.close();
    this.forgotService.open(id);
  }

  //hide unhide login modal password on eye icon click
  togglePassword(item: string) {
    this.showpwd = document.getElementById(item);
    if (!this.showPassword) {
      this.showpwd.setAttribute('type', 'text');
      this.showPassword = true;
    } else {
      this.showpwd.setAttribute('type', 'password');
      this.showPassword = false;
    }
  }

}
