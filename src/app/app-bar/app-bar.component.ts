import {Component, OnInit} from '@angular/core';
import {AuthService, EoUser, UserService} from '@eo-sdk/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  user: EoUser;
  userImageUri: string;

  constructor(private userService: UserService, private auth: AuthService) {
  }

  logout() {
    this.auth.logout(true);
  }

  ngOnInit() {
    // subscribe to the logged in user
    this.userService.user$.subscribe(user => {
      // called every time the current user changes
      this.user = user;
      this.userImageUri = this.user ? this.user.imageUri : null;
    });
  }

}
