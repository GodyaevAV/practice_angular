import { Injectable } from '@angular/core';
import {Game} from './game';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';


const get_games_url = 'http://127.0.0.1:8000/games/get_games/';
const get_count_games_url = 'http://127.0.0.1:8000/games/get_count_games/';
const by_game_url = 'http://127.0.0.1:8000/games/buy_game/';
const game_info_link = 'game-info/';
const get_game_url = 'http://127.0.0.1:8000/games/get_game/';
@Injectable()
export class GameService {



  generate_Headers() {
    const params = new HttpParams();
    const options = {
      params: params,
      headers: new HttpHeaders().set('Authorization', 'Token ' + localStorage.getItem('token')),
    };
    return options;
  }
  get_all_games(page: number, count: number) {
    return this.http.post(get_games_url, {page_number: page, count_games: count}, this.generate_Headers());
  }

  get_count_games() {
    return this.http.get(get_count_games_url, this.generate_Headers());
  }

  game_info(title: string) {
    this.router.navigate([game_info_link + title]);
  }

  get_game(title: string) {
    return this.http.post(get_game_url, {
      'title': title
    }, this.generate_Headers());
  }

  constructor(private http: HttpClient, private router: Router) { }

}
