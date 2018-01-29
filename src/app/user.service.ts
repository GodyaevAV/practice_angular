import {Injectable} from '@angular/core';
import {EditPassword} from './user';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const register_url = 'http://127.0.0.1:8000/auth/register/';
const auth_url = 'http://127.0.0.1:8000/auth/login/';
const logout_url = 'http://127.0.0.1:8000/auth/logout/';
const edit_url = 'http://127.0.0.1:8000/auth/edit_user/';
const edit_user_password_url = 'http://127.0.0.1:8000/auth/edit_user_password/';
const recovery_user_password_url = 'http://127.0.0.1:8000/auth/recovery_user_password/';
const get_my_balance_url = 'http://127.0.0.1:8000/cash_operations/get_balance/';

@Injectable()
export class UserService {
  editPassword = new EditPassword();

  constructor(private http: HttpClient) {
  }

  generate_options() {
    let params = new HttpParams();
    const options = {
      params: params,
      headers: new HttpHeaders().set('Authorization', 'Token ' + localStorage.getItem('token')),
    };
    return options;
  }

  registerUser(user) {
    let params = new HttpParams();
    const options = {
      params: params,
    };
    return this.http.post(register_url, user, options);
  }

  authUser(user) {
    let params = new HttpParams();
    const options = {
      params: params,
    };
    return this.http.post(auth_url, user, options);
  }

  logout() {
    return this.http.post(logout_url, null, this.generate_options());
  }

  editUser(user) {
    return this.http.post(edit_url, user, this.generate_options()).subscribe(data => {
      alert('ok');
    }, err => {
      console.log(err);
    });
  }

  editUserPassword(old_pswd: string, new_pswd: string) {
    this.editPassword.email = JSON.parse(localStorage.getItem('user'))['email'];
    this.editPassword.old_password = old_pswd;
    this.editPassword.new_password = new_pswd;
    return this.http.post(edit_user_password_url, this.editPassword, this.generate_options()).subscribe(data => {
      alert('ok');
    }, err => {
      alert('Неверный пароль');
    });
  }

  recovery_user_password(email) {
    let params = new HttpParams();
    const options = {
      params: params,
    };
    return this.http.post(recovery_user_password_url, {'email': email}, options);
  }

  get_my_balance() {
    return this.http.get(get_my_balance_url, this.generate_options());
  }
}
