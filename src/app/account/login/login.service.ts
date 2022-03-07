import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private modals: any[] = [];

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    // open modal specified by id
    console.log(this.modals)
    const modal = this.modals.find(x => x.id === id);
    modal.open();
    // console.log(this.modals)
    // console.log(modal)
  }

  close(id: string) {
    // close modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.close();
  }
}