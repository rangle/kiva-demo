import { Http } from 'angular2/http';
import { Inject, Injectable } from 'angular2/core';
import { mapToLoan } from '../utils';

@Injectable()
export class KivaApi {
  constructor(@Inject(Http) private http: Http) {
  }

  // TODO: v2 api

  fetchLoans(filterParams: Object, offset: number = 0) {
    const query = filterParams ? `q=j:${JSON.stringify(filterParams)}&` : '';
    const offsetStr = `offset=${offset}`;
    const req = `https://api.dev.kivaws.org/v2/loans?${query}${offsetStr}`;
    console.log(encodeURI(req));
    return this.http.get(encodeURI(req))
      .map(response => response.json().entities)
      .map(items => items.map(item => mapToLoan(item)));
  }

  // fetchLoans(page: number = 1) {
  //   return this.http.get(
  //     `http://api.kivaws.org/v1/loans/search.json?per_page=20&page=${page}`)
  //     .map(response => response.json().loans)
  //     .map(items => items.map(item => mapToLoan(item)));
  // }
}
