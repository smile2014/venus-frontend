import { Injectable } from '@angular/core';
import { HttpService as Http } from '../../util/http.service';
import { ApiConfig } from '../../util/ApiConfig';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TableService {
  constructor(private http:Http) {
  }

  getData() {
    return this.http.get(ApiConfig.demo + 'table').map(this.extractData).catch(this.handleError);
  }

  extractData(res:any) {
    let body = res.json();
    return body || {};
  }

  handleError(error:any) {
    return Observable.throw(error);
  }
}