import 'reflect-metadata';
import 'rxjs/add/operator/map';
import { Http } from 'angular2/http';
import {
  Component,
  Input,
  Inject,
} from 'angular2/core';
// Types
import {
  Loan,
  LoanImage,
  LoanLocation
} from '../../globals.d'

import { mapToLoan } from '../../utils';

@Component({
  selector: 'loans-list-page',
  templateUrl: 'pages/list-page/list-page.html',
})
export class LoansListPage {
  public message: string = 'Hello, Angular!';
  @Input() public loans: Loan[] = [];

  constructor( @Inject(Http) private http: Http) {
  }

  public ngOnInit() {
    this.http.get('http://api.kivaws.org/v1/loans/search.json?per_page=40')
      .map(response => response.json().loans)
      .map(items => {
        return items.map((item) => mapToLoan(item));
      })
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
      }, error => console.log(error));
  }
}
