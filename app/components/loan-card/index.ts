import {
  Component,
  Input
} from 'angular2/core';
import { calcFundingProgress } from '../../utils';
import {Loan} from '../../globals.d';
@Component({
  selector: 'loan-card',
  template: `
    <StackLayout orientation="horizontal" class="loan-card">
      <StackLayout class="details">
        <Label [text]="loan.use" textwrap="true" class="green bold"></Label>

        <StackLayout class="progress_section" orientation="horizontal">
          <Label text="Asking: "></Label>
          <Label [text]="'$' + loan.loanAmount.amount"></Label>
        </StackLayout>

        <AbsoluteLayout class="progress-bar-outer" backgroundColor="lightgray" height="10" horizontalAlignment="left">
          <Label top="1"
            left="1"
            backgroundColor="green"
            [width]="getFundingPercent(loan.loanAmount.amount, loan.fundedAmount.amount)"
            height="8" class="progress-bar-inner">
          </Label>
        </AbsoluteLayout>

        <StackLayout orientation="horizontal">
          <Label text="Borrower: "></Label>
          <Label [text]="loan.name" class="bold"></Label>
        </StackLayout>

        <StackLayout orientation="horizontal">
          <Label text="Location: "  textwrap="true"></Label>
          <Label [text]="loan.location.town + ', ' + loan.location.country" textwrap="true" class="bold"></Label>
        </StackLayout>
      </StackLayout>

      <Image [src]="loan.image.src"
        class="image"
        horizontalAlignment="right"></Image>
    </StackLayout>`
})
export class LoanCard {
  @Input() loan: Loan;

  public getFundingPercent(goal: string, funded: string) : string {
    return String(calcFundingProgress(Number(goal), Number(funded)) + 1) + '%';
  }
}