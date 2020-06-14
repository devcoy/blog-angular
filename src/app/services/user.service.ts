import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Global } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  test() {
    return 'User service success';
  }

  /**
   * Registro de usuario
   */
  userRegister(user): Observable<any> {    
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'register', params, { headers: headers });
  }


  /**
   * Iniciar sesión u Obtener el token
   */
  signup(user, getToken = null): Observable<any> {

    if(getToken != null) {
      user.getToken = true;
    } 
    
    let json = JSON.stringify(user);
    let params = 'json=' + json;    
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'login', params, {headers: headers});
  }


}
