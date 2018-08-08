export class Case {

  id: string;
  title: string;
  created: Date;
  caseID: string;
  type: string;
  status: string;
  product: string;
  start: Date;
  end: Date;

  constructor(json: any) {
    this.id = json.id;
    this.title = json.title;
    this.caseID = json['eoxcase.eoxcaseid'];
    this.type = json['eoxcase.eoxtype'];
    this.status = json['eoxcase.eoxstatus'];
    this.product = json['eoxcase.eoxprodcutline'];

    if (json['created']) {
      this.created = new Date(json['created']);
    }
    if (json['eoxcase.eoxdatestart']) {
      this.start = new Date(json['eoxcase.eoxdatestart']);
    }
    if (json['eoxcase.eoxdateend']) {
      this.end = new Date(json['eoxcase.eoxdateend']);
    }
  }
}
