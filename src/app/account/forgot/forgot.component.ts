import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login';
import { ForgotService } from './forgot.service';

@Component({
  selector: 'forgot-ui',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css', './forgot.less'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotComponent implements OnInit {

  @Input() id: string | undefined;
  private element: any;
  forgotForm!: FormGroup
  isClickBackGround: boolean | undefined;


  constructor(
    private modalService: ForgotService,
    private loginService: LoginService,
    private el: ElementRef,
    private formBuilder: FormBuilder

  ) {

    this.element = el.nativeElement;

  }

  ngOnInit(): void {

    this.initializeSignUpForm();

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);

  }

  // forgot form
  initializeSignUpForm() {
    this.forgotForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
    });
  }

  // open forgot modal
  open(): void {
    this.isClickBackGround = true;
    this.forgotForm.reset();
    this.element.style.display = 'block';
    document.body.classList.add('login-ui-open');
  }

  // close forgot modal 
  close(): void {
    this.isClickBackGround = false;
    this.forgotForm.reset();
    this.element.style.display = 'none';
    document.body.classList.remove('login-ui-open');
  }

  // back to login button function
  openLoginModal(id: string) {
    this.close();
    this.loginService.open(id);
  }

  closeLoginModal(id: string) {
    this.loginService.close(id);
  }
}
