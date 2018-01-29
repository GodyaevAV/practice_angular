import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RegistrationComponent} from './registration/registration.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {EventsComponent} from './events/events.component';
import {GamesComponent} from './games/games.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AuthService} from './auth.service';
import {MatCardModule} from '@angular/material/card';
import {EditComponent} from './edit/edit.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ValidationService} from './validation.service';
import {MatTabsModule} from '@angular/material/tabs';
import {GameInfoComponent} from './game-info/game-info.component';
import {GameService} from './game.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MyGamesComponent} from './my-games/my-games.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {OrderingComponent} from './ordering/ordering.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_FORMATS, MatNativeDateModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    OrderingComponent,
    RegistrationComponent,
    AuthorizationComponent,
    EventsComponent,
    GamesComponent,
    EditComponent,
    GameInfoComponent,
    MyGamesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [UserService,
    AuthService,
    ValidationService,
    GameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
