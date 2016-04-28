import {
  Component,
  Input
} from 'angular2/core';
import { calcFundingProgress } from '../../utils';
import {Loan} from '../../globals.d';
import { ProgressBar } from '../progress-bar';
@Component({
  selector: 'loan-card',
  directives: [ProgressBar],
  templateUrl: 'components/loan-card/template.html',
  styleUrls: [
    'components/loan-card/styles.css',
    'components/loan-card/styles-shared.css'
  ]
})
export class LoanCard {
  @Input() loan: Loan;

  public getFundingPercent(goal: string, funded: string) : string {
    return String(calcFundingProgress(Number(goal), Number(funded)) + 1) + '%';
  }

  public getFundingText() {
    return this.loan.location.town ?
      `${this.loan.name} in ${this.loan.location.town}, ` +
        `${this.loan.location.state}` :
      this.loan.name;
  }
}
