import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


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
    private _userService: UserService,
    private _router: Router, // Redireccionar
    private _route: ActivatedRoute // Obtner parámetros de la url
  ) {
    this.pageTitle = 'Iniciar sesión';
    this.user = new User(null, '', '', 'ROLE_USER', '', '', '', '', null, null);
  }

  ngOnInit() {
    // Se ejecuta siempre y cierra sesión solo cuando le llegua el parámetro :sure en la url
    this.logout();
  }

  /**
   * Iniciar sesión
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

              // Redirección
              this._router.navigate(['inicio']);
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

  /**
   * Cerrar sesión
   */
  logout() {
    // Obtener el parámetro de la url
    this._route.params.subscribe(params => {
      let logout = +params['sure']; // Obtenernos el parámetro :sure

      // Remuevo lo que esta almacenado en localStorage y elimino las valores de las propiedades
      if (logout === 1) {
        localStorage.removeItem('token');
        localStorage.removeItem('identity');

        this.token = null;
        this.identity = null;

        // Redirección
        this._router.navigate(['inicio']);
      }
    });
  }

}
