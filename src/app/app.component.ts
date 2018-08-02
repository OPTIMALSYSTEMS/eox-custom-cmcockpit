import {Component} from '@angular/core';
import {AuthService, BackendService, EoUser, UserService} from '@eo-sdk/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authenticated: boolean;
  user: EoUser;
  userImageUri: string;

  constructor(private auth: AuthService,
              private backend: BackendService,
              private userService: UserService) {
    // subscribe to authentication changes
    this.auth.authenticated$.subscribe(a => this.authenticated = a);
    // subscribe to the logged in user
    this.userService.user$.subscribe(user => {
      // called every time the current user changes
      this.user = user;
      this.userImageUri = this.user ? this.user.imageUri : null;
    });
  }

  logout() {
    this.auth.logout(true);
  }
}
