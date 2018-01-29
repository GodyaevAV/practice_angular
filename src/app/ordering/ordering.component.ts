import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})

export class OrderingComponent implements OnInit {
  dateValue: Date;
  aForm: FormGroup;
  constructor() {
  }

  ngOnInit() {
  }
  display(event) {
    console.log(event);
  }
}
