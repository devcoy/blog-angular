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
}
