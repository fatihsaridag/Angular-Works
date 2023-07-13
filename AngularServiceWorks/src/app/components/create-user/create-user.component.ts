import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  template: `
    <input type="text" placeholder="Name" #txtName > <button (click)="userCreate(txtName.value)">Kaydet</button>
  `
})
export class CreateUserComponent {

  constructor(private userService: UserService) {  }

    userCreate(name : string){
      this.userService.addUser(name);
   
  }

}
