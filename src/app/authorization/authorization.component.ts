import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

const redirect = '/';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  aForm: FormGroup;
  rForm: FormGroup;
  hide = true;
  user: any;
  token: any;
  progress_bar_status = true;
  form_active_flag = true;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.aForm = fb.group({
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
    });
    this.rForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit() {
  }

  auth(form) {
    this.user = form.value;
    this.userService.authUser(this.user).subscribe(data => {
        this.token = data['token'];
        localStorage.setItem('token', this.token);
        this.router.navigate([redirect]);
      },
      error => {
        alert(error['e']);
      });
  }

  recovery_user_password(form) {
    let email = form.value.email;
    this.progress_bar_status = false;
    this.userService.recovery_user_password(email).subscribe(data => {
      alert('Проверьте почту');
      this.progress_bar_status = true;
    }, err => {
      alert(err.error.error);
      this.progress_bar_status = true;
    });
    this.form_active_flag = !this.form_active_flag;
  }
}
