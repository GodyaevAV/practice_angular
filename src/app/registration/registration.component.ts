import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

const redirect = '/auth';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  rForm: FormGroup;
  user: User;
  response: any;
  hide = true;
  selected = 'false';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.rForm = fb.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'is_author': [false, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'about': ''
    });
  }

  ngOnInit() {
  }

  register(form) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = form.value;
    this.user.is_author = false;
    if (form.value.is_author === 'true') {
      this.user.is_author = true;
      if (this.rForm.value.about.length === 0) {
        alert('введите информацию о себе');
      } else {
        this.register_request();
      }
    } else {
      this.register_request();
    }
  }

  register_request() {
    this.userService.registerUser(this.user).subscribe(data => {
        this.response = data;
        this.router.navigate([redirect]);
      },
      error => {
        if (error['error']['e']['email']) {
          alert(error['error']['e']['email']);
        } else {
          alert(error['error']['e']);
        }
      });
  }
}
