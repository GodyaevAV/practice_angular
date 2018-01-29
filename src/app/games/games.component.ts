import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

const redirect = '/game-info';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  private subscription: Subscription;
  private id = 1;
  progress_bar_status = false;
  server = 'http://127.0.0.1:8000';
  count: number;
  games: any[];
  index: number[];
  pageSize = 3;

  constructor(private gameService: GameService, private router: Router) {
    this.subscription = this.gameService.get_count_games().subscribe(data => {
      this.count = data['count'];
      let flag = Math.round(this.count / 3);
      if (this.count / 3 > flag) {
        this.count = flag + 1;
      } else {
        this.count = flag;
      }
      this.index = new Array(this.count);
      this.get_games();
      this.pagination();
    });

  }

  start_game(game_url: string) {
    console.log(game_url);
  }

  pagination() {
    for (let i = 1; i <= this.count; i++) {
      this.index[i - 1] = i;
    }
  }

  change(i: number) {
    this.id = i;
    this.get_games();
  }

  get_games() {
    this.gameService.get_all_games(this.id, this.pageSize).subscribe(params => {
      this.games = params['games'];
      this.progress_bar_status = true;
    });
  }

  game_info (title: string) {
    this.gameService.game_info(title);
  }

  ngOnInit() {
  }

}
