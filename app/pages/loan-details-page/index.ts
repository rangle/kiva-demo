import 'reflect-metadata';
import 'rxjs/add/operator/map';
import { Component, Inject, Input } from 'angular2/core';
import { LoansService } from '../../core/loans-service';
import { LoanDetails } from '../../components';
import { Loan } from '../../globals.d';
import { RouterService } from '../../core/router-service';
import { ROUTES } from '../../constants';
import { topmost } from 'ui/frame';
import { Page } from 'ui/page';
import { isAndroid } from '../../utils/platform';
@Component({
  selector: 'loan-details-page',
  template: `
    <ScrollView>
      <loan-details [loan]="loansStore.selectedLoan"></loan-details>
    </ScrollView>
  `,
  directives: [LoanDetails],
  providers: [],
})
export class LoanDetailsPage {
  constructor(@Inject(LoansService) private loansStore: LoanDetails) {
  }
  private page: Page;
  ngAfterContentChecked() {
    if (isAndroid()) {
      this.page = <Page>topmost().currentPage;
      this.page.actionBarHidden = true;
    }
  }
}