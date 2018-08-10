import {Component} from '@angular/core';
import {AuthService, TranslateService, EoUser, SearchService, UserService} from '@eo-sdk/core';
import {Case} from './model/case.model';
import * as _ from 'lodash';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authenticated: boolean;
  loading: boolean;
  cases: Case[] = [];
  chart;
  groupedRes;
  products: string[] = [];
  selectedProduct: string;


  constructor(private auth: AuthService, private translate: TranslateService,
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
        this.getProductLines(this.cases);
        this.chart = this.createChartData(this.cases);
        this.loading = false;
      },
      err => {
        this.loading = false;
      });
  }

  selectProduct(p){
    if(p) {
      this.selectedProduct = p;
      this.chart = this.createChartData(this.groupedRes[p]);
    } else {
      this.selectedProduct = null;
      this.chart = this.createChartData(this.cases);
    }
  }

  getProductLines(cases: Case[]) {
    this.groupedRes = _.groupBy(cases, 'product');
    this.products = Object.keys(this.groupedRes).sort();
  }

  createChartData(cases: Case[]) {

    const typeGroups = _.groupBy(cases, 'type');
    const types = Object.keys(typeGroups);
    const data = [];
    types.forEach(t => data.push(typeGroups[t].length));
    return {
      data: data,
      labels: types,
      size: cases.length
    };
  }
}
