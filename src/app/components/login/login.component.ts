import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pageTitle: string;
  user: User;
  status: string;
  message: string;
  token: any;
  identity: any;

  constructor(
    private _userService: UserService
  ) {
    this.pageTitle = 'Iniciar sesión';
    this.user = new User(null, '', '', 'ROLE_USER', '', '', '', '', null, null);
  }

  ngOnInit() {
  }

  /**
   * Iniciar sesión
   * @param user Objeto de usuario
   * @param getToken true: obtendra los datos del usuario identificado
   * 
   * @return token o data_user
   */
  onSubmit(form) {
    //console.log(this.user);
    this._userService.signup(this.user).subscribe(
      response => {
        //console.log(response);
        if (response.status != 'error') {
          this.status = 'success';
          this.token = response;

          // Obtener el Objeto de usuario identificado
          this._userService.signup(this.user, true).subscribe(
            response => {
              this.identity = response;
              // Persistir datos del usuario identificado
              // console.log(this.token); console.log(this.identity);            
              localStorage.setItem('token', this.token);
              // Convertir el obj de js a json string
              localStorage.setItem('identity', JSON.stringify(this.identity));
            },
            error => {
              this.status = response.status;
              this.message = response.message;
            }
          );

        } else {
          this.status = response.status;
          this.message = response.message;
        }
      },
      error => {
        console.log(<any>error);
        this.status = error.error.status;
        this.message = error.error.message;
      }
    );
  }

}
