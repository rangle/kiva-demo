import {
  Component,
  Input
} from 'angular2/core';
import { calcFundingProgress } from '../../utils';
import {Loan} from '../../globals.d';
@Component({
  selector: 'loan-card',
  template: `
    <StackLayout orientation="horizontal" class="loan">
      <StackLayout class="loanContent">
        <StackLayout class="loanAbout" >
          <Label [text]="loan.sector.name+' - '+loan.activity.name" textwrap="true" class="loanAbout-categories loanSectionLabel"></Label>
          <Label [text]="loan.use" textwrap="true" class="loanUse"></Label>
        </StackLayout>

        <StackLayout class="loanProgress">
          <StackLayout class="loanAmount" orientation="horizontal">
            <Label [text]="'$' + loan.loanAmount.amount"></Label>
            <Label text=" needed"></Label>
          </StackLayout>
          <AbsoluteLayout class="loanProgress-max" horizontalAlignment="left">
            <Label [width]="getFundingPercent(loan.loanAmount.amount, loan.fundedAmount.amount)"
              class="loanProgress-value">
            </Label>
          </AbsoluteLayout>
          <StackLayout class="loanFunding" orientation="horizontal">
            <Label [text]="getFundingPercent(loan.loanAmount.amount, loan.fundedAmount.amount) + ' funded by '"></Label>
            <Label [text]=" loan.borrowerCount + ' lender(s)'"></Label>
          </StackLayout>
        </StackLayout>

        <StackLayout class="loanBorrower">
          <StackLayout orientation="horizontal" class="loanBorrower-name">
            <Label class="loanSectionLabel"
              text="Borrower: "></Label>
          </StackLayout>
          <StackLayout class="loanBorrower-location"
            orientation="horizontal" >
            <Label textwrap="true"
              [text]="(loan.location.town ? loan.name +' in '+ loan.location.town+', '+loan.location.state : loan.name ) " class="bold"></Label>
          </StackLayout>
        </StackLayout>

      </StackLayout>

      <AbsoluteLayout class="loanImage br3"
        horizontalAlignment="right"
        verticalAlignment="top">
        <Label class="loanImage-filter br3"
          top="0"
          left="0"
          width="100%"
          height="100%">
        </Label>
        <Image [src]="loan.image.src"
          class="br3"
          top="0"
          left="0"
          width="100%"
          height="100%"></Image>
      </AbsoluteLayout>

    </StackLayout>`
})
export class LoanCard {
  @Input() loan: Loan;

  public ngOnInit(){
    console.log(JSON.stringify(this.loan));
  };

  public getFundingPercent(goal: string, funded: string) : string {
    return String(calcFundingProgress(Number(goal), Number(funded)) + 1) + '%';
  }
}
