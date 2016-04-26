import { Component, Input } from 'angular2/core';
import {Loan} from '../../globals.d';
import { getImageSrc } from '../../utils';
import { ProgressBar } from '../progress-bar';
import { calcFundingProgress } from '../../utils';
@Component({
  selector: 'loan-details',
  templateUrl: 'components/loan-details/template.html',
  directives: [ProgressBar],
  providers: [],
  styleUrls: ['components/loan-details/styles.css']
})
export class LoanDetails {
  @Input() private loan: Loan;

  public getDetailsImage() {
    return getImageSrc(this.loan.imageId, 400);
  }

  public getPercentText() {
    const percent: number = calcFundingProgress(
      this.loan.loanAmount.amount,
      this.loan.fundedAmount.amount);
    return `${percent}%`;
  }

  public getProgressText() {
    const toGo: number = Number(this.loan.loanAmount.amount) -
       Number(this.loan.fundedAmount.amount);
    return ` funded, $${toGo} to go`;
  }
}

