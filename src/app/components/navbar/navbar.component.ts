import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Global } from 'src/app/services/global.service';
import { identity } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit, DoCheck {

  token: string;
  identity: any;

  constructor(
    private _userService : UserService
  ) { }

  ngOnInit() {
    // Ejecuto para actualizar el navbar
    this.loadUser();
  }

  ngDoCheck () {
    // Ejecuto para actualizar el navbar
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();    
  }

}
