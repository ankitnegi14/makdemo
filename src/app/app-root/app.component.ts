import { Component } from '@angular/core';
import { LoginService } from '../account/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'makdemo';

  constructor(
    public modalService: LoginService
  ) {

  }

  openModal(id: string) {
    alert();
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
