import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  pageTitle: string;
  user: User;

  constructor(
    private _userService: UserService
  ) { 
    this.pageTitle = 'Registro';
    this.user = new User(null, '', '', 'ROLE_USER', '', '', '', '', null, null);
  }

  ngOnInit() {
  }

  /**
   * Registro de usuario
   */
  onSubmit(form) {
    console.log(this.user);
    console.log(this._userService.test());
  }

}
