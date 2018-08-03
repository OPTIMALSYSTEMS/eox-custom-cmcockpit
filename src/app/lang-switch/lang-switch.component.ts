import {Component, Input, OnInit} from '@angular/core';
import {UserService, TranslateService} from '@eo-sdk/core';

@Component({
  selector: 'app-lang-switch',
  templateUrl: './lang-switch.component.html',
  styleUrls: ['./lang-switch.component.scss']
})
export class LangSwitchComponent implements OnInit {

  // input param indicating whether or not to apply language changes to the backend too
  @Input() hasUser: boolean;
  currentLanguage: string;

  constructor(private userService: UserService, private translate: TranslateService) {
  }

  setLang(lang: string) {

    if (this.hasUser) {
      // if we got a logged in user, we persist the settings on the backend side ...
      this.userService.changeClientLocale(lang);
    } else {
      // ... otherwise we just set the language or the app
      this.translate.use(lang);
    }
  }

  ngOnInit() {

    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
    if (this.translate.currentLang) {
      this.currentLanguage = this.translate.currentLang;
    } else {
      this.translate.use('de');
    }
  }

}
