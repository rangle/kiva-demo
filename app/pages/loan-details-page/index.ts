import 'reflect-metadata';
import 'rxjs/add/operator/map';
import { Component, Inject, Input } from 'angular2/core';
import { LoansService } from '../../core/loans-service';
import { LoanDetails } from '../../components';
import { Loan } from '../../globals.d';

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
  constructor(@Inject(LoansService) private loansStore: LoansService) {
  }
}
