import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  pageTitle: string;
  user: User;

  constructor() { 
    this.pageTitle = 'Iniciar sesión';
    this.user = new User(null, '', '', 'ROLE_USER', '', '', '', '', null, null);
  }

  ngOnInit() {
  }

  /**
   * Iniciar sesión
   */
  login(form) {
    console.log(this.user);
  }

}
