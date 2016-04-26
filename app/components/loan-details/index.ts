import { Component, Input } from 'angular2/core';
import {Loan} from '../../globals.d';
import { getImageSrc } from '../../utils';
import { ProgressBar } from '../progress-bar';
import { calcFundingProgress } from '../../utils';
import { loadImageAsync } from '../../utils/native-image-utils';
import { DETAILS_IMAGE_SIZE } from '../../constants';
@Component({
  selector: 'loan-details',
  templateUrl: 'components/loan-details/template.html',
  directives: [ProgressBar],
  providers: [],
  styleUrls: ['components/loan-details/styles.css']
})
export class LoanDetails {
  @Input() private loan: Loan;
  private isLoading: boolean = false;
  private detailsImageSrc: string;

  public getDetailsImage() {
    return getImageSrc(this.loan.imageId, DETAILS_IMAGE_SIZE);
  }

  ngOnInit() {
    // Load the larger image, show loading indicator in interim
    this.isLoading = true;
    const imgSrc = getImageSrc(this.loan.imageId, DETAILS_IMAGE_SIZE)
    const imageProm = loadImageAsync(imgSrc, true);
      imageProm.then((res) => {
        this.isLoading = false;
        this.detailsImageSrc = imgSrc;
      })
      .catch((err) => {
        this.isLoading = false;
      })

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

