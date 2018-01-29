import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {Subscription} from 'rxjs/Subscription';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

// const redirect = '/game-info';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css'],
  animations: [trigger('myAwesomeAnimation', [
    state('small', style({
      transform: 'scale(1)',
    })),
    state('large', style({
      transform: 'scale(1.2)',
    })),
    transition('small <=> large', animate('200ms ease-in', style({
      transform: 'translateY(40px)'
    }))),
  ])
  ]
})
export class MyGamesComponent implements OnInit {
  state = 'small';
  // private subscription: Subscription;
  // private id = 1;
  // count: number;
  // server = 'http://127.0.0.1:8000';
  // games: any[];
  // index: number[];
  // pageSize = 3;
  constructor(private gameService: GameService) {
    // this.subscription = this.gameService.get_count_my_games().subscribe(data => {
    //   this.count = data['count'];
    //   const flag = Math.round(this.count / 3);
    //   if (this.count / 3 > flag) {
    //     this.count = flag + 1;
    //   } else {
    //     this.count = flag;
    //   }
    //   this.index = new Array(this.count);
    //   this.get_my_games();
    //   this.pagination();
    // });
  }

  ngOnInit() {
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  // pagination() {
  //   for (let i = 1; i <= this.count; i++) {
  //     this.index[i - 1] = i;
  //   }
  // }
  // change(i: number) {
  //   this.id = i;
  //   this.get_my_games();
  // }
  // get_my_games() {
  //   this.gameService.get_my_games(this.id, this.pageSize).subscribe(params => {
  //     this.games = params['games'];
  //   });
  // }
  // game_info (title: string) {
  //   this.gameService.game_info(title);
  // }
}
