import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {EventsComponent} from './events/events.component';
import {GamesComponent} from './games/games.component';
import {AuthService} from './auth.service';
import {EditComponent} from './edit/edit.component';
import {GameInfoComponent} from './game-info/game-info.component';
import {MyGamesComponent} from './my-games/my-games.component';
import {OrderingComponent} from './ordering/ordering.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'registration', component: RegistrationComponent},
  {path: 'auth', component: AuthorizationComponent},
  {
    path: '', component: EventsComponent, canActivate: [AuthService], children: [
      {path: '', redirectTo: '/games', pathMatch: 'full'},
      {path: 'games', component: GamesComponent},
      {path: 'edit', component: EditComponent},
      {path: 'game-info/:id', component: GameInfoComponent},
      {path: 'my-games', component: MyGamesComponent},
      {path: 'ordering', component: OrderingComponent},
    ]
  },
  {path: '**', redirectTo: 'games'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
