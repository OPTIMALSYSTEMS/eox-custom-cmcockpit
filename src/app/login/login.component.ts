import {Component, OnInit} from '@angular/core';
import {AuthService, EoUser} from '@eo-sdk/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: any = {};
  uriPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

  constructor(private auth: AuthService) {
  }

  login() {
    this.auth.login(this.form.host, this.form.username, this.form.password).subscribe(
      (user: EoUser) => {
        console.log('successfully logged in ' + user.title);
      },
      err => {
        console.error(err);
      }
    );
  }
}
