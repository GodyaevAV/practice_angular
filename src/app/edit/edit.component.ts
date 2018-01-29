import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {MatSnackBar} from '@angular/material';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  pForm: FormGroup;
  hide = true;
  hide2 = true;
  hide3 = true;
  is_author = false;
  password = false;
  constructor(private fb: FormBuilder, private userService: UserService, public snackBar: MatSnackBar) {
    let flag = localStorage.getItem('user');
    flag = JSON.parse(flag);
    if ( flag['email'] ) {
      if ( flag === 'false' ) {
        this.is_author = false;
      } else if (flag === 'true') {
        this.is_author = true;
      }
    }
  this.rForm = fb.group({
    'first_name': [null, Validators.required],
    'last_name': [null, Validators.required],
    'is_author': [false, Validators.required],
    'about': ''
  });
    this.pForm = fb.group({
      'old_password': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'new_password': [null, [Validators.compose([Validators.required, Validators.minLength(4)]), ValidationService.password]],
      'new_password_control': [null, [Validators.compose([Validators.required, Validators.minLength(4)]), ValidationService.new_password]],
    });
}
  status(form) {
    if (form.value.is_author === 'true') {
      this.is_author = true;
    } else {
      this.is_author = false;
    }
}
edit_password(form) {
    if (form.value.new_password === form.value.new_password_control) {
      this.userService.editUserPassword(form.value.old_password, form.value.new_password);
    } else {
      alert('Пароли не совпадают');
    }
}
  edit(form) {
    {
      const user = form.value;
      user.is_author = false;
      if (this.is_author === true) {
        user.is_author = true;
        if (this.rForm.value.about.length === 0) {
          alert('введите информацию о себе');
        } else {
          this.userService.editUser(user);
          // this.openSnackBar('success');
        }
      } else {
        this.userService.editUser(user);
        // this.openSnackBar('success');
      }
    }
  }


  ngOnInit() {
  }

}
