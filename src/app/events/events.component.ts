import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

const redirect = ['/auth'];

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [trigger('myMenuAnimation', [
    state('none', style({
      transform: 'TranslateX(-100%)',
    })),
    state('visible', style({
      transform: 'TranslateX(0px)',
    })),
    transition('none <=> visible', animate('250ms ease-in'))
  ]),
  trigger('myContentAnimation', [
    state('none', style({
      transform: 'TranslateX(-12.5%)'
    })),
    state('visible', style({
      transform: 'TranslateX(0px)',
    })),
    transition('none <=> visible', animate('250ms ease-in'))
  ])
  ]
})
export class EventsComponent implements OnInit {
balance: number;
  state = 'visible';
  constructor(private userService: UserService, private router: Router) {
    this.userService.get_my_balance().subscribe(data => {
      this.balance = data['balance'];
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  display_menu() {
    this.state = (this.state === 'none' ? 'visible' : 'none');
  }
  set_none_menu() {
    this.state = 'none';
  }
  logout() {
    this.userService.logout().subscribe(data => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(redirect);
    });
  }
}
