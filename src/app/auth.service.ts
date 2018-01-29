import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from './user';
import {Router} from '@angular/router';

const url = 'http://127.0.0.1:8000/auth/get_my_user/';
const redirect = 'auth';
@Injectable()
export class AuthService implements CanActivate {
  flag: boolean;
canActivate() {
  let token = localStorage.getItem('token');
  if (token) {
    this.func(token);
    return true;
  } else {
    this.router.navigate([redirect]);
    return false;
  }
}

func(token) {
  let params = new HttpParams();
  const options = {
    params: params,
    headers: new HttpHeaders().set('Authorization', 'Token ' + token),
  };
  return this.http.get(url, options).subscribe( data => {
    // console.log(data, 'data');
    localStorage.setItem('user', JSON.stringify(data));

  }, err => {
    console.log(err);
    this.router.navigate([redirect]);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  });
}
    constructor(private http: HttpClient, private router: Router) { }

}
