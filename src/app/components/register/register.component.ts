import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  pageTitle: string;
  user: User;

  constructor() { 
    this.pageTitle = 'Registro';
    this.user = new User(null, '', '', 'ROLE_USER', '', '', '', '', null, null);
  }

  ngOnInit() {
  }

}
