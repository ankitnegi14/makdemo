import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SignupService } from './signup.service';
import { LoginService } from '../login/login.service';

// for phone number with country code
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'signup-ui',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './signup.less'],
  //ViewEncapsulation.None is used to set style global instead of only for this component
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {


  //using element property for accessing the DOM element of the modal for show and hide
  private element: any;
  isClickBackGround: boolean = false;

  // using @input for setting id of modal window
  @Input() id: string | undefined;
  isVisibleSignUpPopUp: boolean | undefined;
  isVisiblePassword: boolean | undefined;
  isPhoneNumberInvalid: boolean | undefined;
  signUpForm!: FormGroup;
  errorlog = false;
  errormsg: string = '';

  showPassword: boolean = false;
  showpwd: any;

  constructor(

    private spinner: NgxSpinnerService,

    private el: ElementRef,
    private modalService: SignupService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,

  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {

    this.isVisibleSignUpPopUp = false;
    this.isVisiblePassword = false;

    this.initializeSignUpForm();

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }



    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  //creating signUp form
  initializeSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.required]),
      'agreeCheckbox': new FormControl('', [Validators.required])
    });
  }

  // validation
  // get fullName() {
  //   return this.signUpForm.get('full_name');
  // }
  // get email() {
  //   return this.signUpForm.get('email');
  // }
  // get password() {
  //   return this.signUpForm.get('password');
  // }
  // get phone() {
  //   return this.signUpForm.get('phone');
  // }


  // for phone number with country code 
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];



  // open modal
  open(): void {
    this.signUpForm.controls.password.reset('');
    this.signUpForm.reset();
    this.errorlog = false;
    this.errormsg = '';
    this.isClickBackGround = true;
    this.isVisibleSignUpPopUp = false;
    this.element.style.display = 'block';
    document.body.classList.add('login-ui-open');
  }

  // close modal
  close(): void {
    this.signUpForm.reset();
    this.isVisiblePassword = false;
    this.isClickBackGround = false;
    this.isVisibleSignUpPopUp = false;
    this.element.style.display = 'none';
    document.body.classList.remove('login-ui-open');
  }

  openLoginModal(id: string) {
    this.close();
    this.loginService.open(id);
  }

  closeLoginModal(id: string) {
    this.loginService.close(id);
  }

  onCloseModal() {
    this.isClickBackGround = false;
    this.element.style.display = 'none';
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


  createAccount() {
    // console.log(this.signUpForm.value);
    //validation on submit
    if (!this.signUpForm.controls.firstName.value) {
      this.errorlog = true;
      this.errormsg = 'Enter first name';
      return;
    }
    if (!this.signUpForm.controls.lastName.value) {
      this.errorlog = true;
      this.errormsg = 'Enter last name';
      return;
    }
    if (!this.signUpForm.controls.email.value) {
      this.errorlog = true;
      this.errormsg = 'Enter valid email';
      return;
    }
    if (!this.signUpForm.controls.password.value) {
      this.errorlog = true;
      this.errormsg = 'Enter password';
      return;
    }
    if (!this.signUpForm.controls.phone.value) {
      this.errorlog = true;
      this.errormsg = 'Enter phone number';
      return;
    }
    if (!this.signUpForm.controls.agreeCheckbox.value) {
      this.errorlog = true;
      this.errormsg = 'Please tick the checkbox';
      return;
    }
    else {
      this.errorlog = false;
      this.signUpForm.reset();
      console.log(this.signUpForm.value);
      alert(this.signUpForm.value)
      this.close()
    }
  }
}
