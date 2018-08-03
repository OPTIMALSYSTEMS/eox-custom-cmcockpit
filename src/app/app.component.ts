import {Component} from '@angular/core';
import {AuthService, BackendService, EoUser, UserService} from '@eo-sdk/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authenticated: boolean;

  constructor(private auth: AuthService,
              private backend: BackendService,
              private userService: UserService) {
    // subscribe to authentication changes
    this.auth.authenticated$.subscribe(a => this.authenticated = a);
  }
}
