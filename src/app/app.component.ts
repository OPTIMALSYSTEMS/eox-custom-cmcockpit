import {Component} from '@angular/core';
import {AuthService, BackendService, EoUser, SearchService, UserService} from '@eo-sdk/core';
import {Case} from './model/case.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authenticated: boolean;
  loading: boolean;
  cases: Case[] = [];

  constructor(private auth: AuthService,
              private searchService: SearchService) {
    // subscribe to authentication changes
    this.auth.authenticated$.subscribe(a => {
      this.authenticated = a;
      this.fetchData();
    });
  }

  fetchData() {

    // create query json for fetching the required objects and fields
    const query = {
      fields: [
        'id',
        'title',
        'created',
        'eoxcase.eoxcaseid',
        'eoxcase.eoxtype',
        'eoxcase.eoxstatus',
        'eoxcase.eoxprodcutline',
        'eoxcase.eoxdatestart',
        'eoxcase.eoxdateend'
      ],
      types: ['eoxcase']
    };
    this.loading = true;
    this.searchService.executeQuery(query, false, 1000).subscribe(
      res => {

        // Now we'll map the hits to our model
        this.cases = this.searchService.createResultFromResponse(res).hits.map(hit => new Case(hit));
        console.log(this.cases);
        this.loading = false;
      },
      err => {
        this.loading = false;
      });
  }
}
