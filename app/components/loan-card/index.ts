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
          <Label [text]="loan.sector.name+' - '+loan.activity.name" textwrap="true" class="loanAbout-categories"></Label>
          <Label [text]="loan.use" textwrap="true" class="loanUse"></Label>
        </StackLayout>

        <StackLayout class="loanProgress">
          <StackLayout class="loanAmount" orientation="horizontal">
            <Label [text]="'$' + loan.loanAmount.amount"></Label>
            <Label text=" needed"></Label>
          </StackLayout>
          <AbsoluteLayout class="progress-bar-outer" backgroundColor="lightgray" height="10" horizontalAlignment="left">
            <Label top="1"
              left="1"
              backgroundColor="green"
              [width]="getFundingPercent(loan.loanAmount.amount, loan.fundedAmount.amount)"
              height="8" class="progress-bar-inner">
            </Label>
          </AbsoluteLayout>
        </StackLayout>


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
        class="loanImage"
        horizontalAlignment="right"></Image>
    </StackLayout>`
})
export class LoanCard {
  @Input() loan: Loan;
  /*
  public ngOnInit(){
    console.log(JSON.stringify(this.loan));
  };
  */
  public getFundingPercent(goal: string, funded: string) : string {
    return String(calcFundingProgress(Number(goal), Number(funded)) + 1) + '%';
  }
}
