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
import { KivaApi} from '../../core/kiva-api-service';

@Component({
  selector: 'loans-list-page',
  templateUrl: 'pages/list-page/list-page.html',
})
export class LoansListPage {
  private isLoading: boolean = false;
  private currentPage: number = 1;
  private error: boolean = false;
  @Input() public loans: Loan[] = [];

  constructor(@Inject(KivaApi) private api: KivaApi) {
  }
  
  private _cacheLoanImages(loans: Loan[]) : Loan[] {
    console.log('caching images');
    loans.forEach(loan => fetchAndCache(getImageSrc(loan.imageId)));
    return loans;
  }
  
  // Makes requests to the KivaApi for new pages of loans
  // Uses this.currentPage to track the number of pages to show
  // the user.
  private _handleFetchLoans() {
    this.isLoading = true;
    this.api.fetchLoans(this.currentPage)
      .map((loans: Loan[]) => this._cacheLoanImages(loans))
      .subscribe((loans: Loan[]) => {
        loans.forEach((loan) => {
          this.loans.push(loan);
        });
      this.currentPage++;
      this.isLoading = false;
    }, (error) => {
      console.log(error);
      this.error = true;
      this.isLoading = false;
    });
  }

  public ngOnInit() {
    this._handleFetchLoans();
  }

  public getFundingPercent(goal: string, funded: string) : string {
    return String(calcFundingProgress(Number(goal), Number(funded)) + 1) + '%';
  }
  
  public onLoadMore() {
    // Sometimes this event gets called multiple times based
    // on how a user scrolls, we only want to make the request once
    if (!this.isLoading) {
      this._handleFetchLoans();
    }
  }
}
