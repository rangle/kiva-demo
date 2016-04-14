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
} from '../../globals.d';
import {
  mapToLoan,
  calcFundingProgress,
  getImageSrc
} from '../../utils';
import { fetchAndCache } from '../../utils/native-image-utils';

@Component({
  selector: 'loans-list-page',
  templateUrl: 'pages/list-page/list-page.html',
})
export class LoansListPage {
  private isLoading: boolean = false;
  private currentPage: number = 0;
  
  @Input() public loans: Loan[] = [];

  constructor(@Inject(Http) private http: Http) {
  }

  public ngOnInit() {
    this.isLoading = true;
    this.http.get('http://api.kivaws.org/v1/loans/search.json?per_page=20')
      .map(response => response.json().loans)
      .map(items => {
        return items.map((item) => mapToLoan(item));
      })
      .map(loans => {
        // Aggresively get the initial images
        loans.forEach(loan => fetchAndCache(getImageSrc(loan.imageId)));
        return loans;
      })
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
        this.isLoading = false;
      }, error => console.log(error));
  }

  public getFundingPercent(goal: string, funded: string) : string {
    return String(calcFundingProgress(Number(goal), Number(funded)) + 1) + '%';
  }
  
  public onLoadMore() {
    console.log('loaded more');
  }
}
