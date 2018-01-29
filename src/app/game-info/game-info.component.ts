import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  private id: string;
  private subscription: Subscription;
  data = {};
  image_url = 'http://127.0.0.1:8000';


  constructor(private activateRoute: ActivatedRoute, private gameService: GameService) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.subscription = this.gameService.get_game(this.id).subscribe( data => {
      this.data = data['game'];
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    const now = new Date();
    console.log(now.toTimeString());
  }

}
