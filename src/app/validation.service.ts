import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  static flag: any;

  constructor() { }


  static password(control) {
    return true;
  }
  static new_password(control) {
    return true;
  }
}
