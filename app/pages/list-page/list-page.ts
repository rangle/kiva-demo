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

import {
  mapToLoan,
  calcFundingProgress
} from '../../utils';

import { ImageCache } from '../../core/image-cache-service';

@Component({
  selector: 'loans-list-page',
  templateUrl: 'pages/list-page/list-page.html',
})
export class LoansListPage {
  @Input() public loans: Loan[] = [];

  constructor(@Inject(Http) private http: Http,
    @Inject(ImageCache) private cache: ImageCache) {
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

  public getFundingPercent(goal: string, funded: string) : string {
    return String(calcFundingProgress(Number(goal), Number(funded)) + 1) + '%';
  }

  public getImageSrc(src: string) {
    return this.cache.getImage(src);
  }
}
