import 'reflect-metadata';
import 'rxjs/add/operator/map';
import { Component, Inject } from 'angular2/core';
// Types
import { Loan } from '../../globals.d';
import { mapToLoan, getImageSrc } from '../../utils';
import { fetchAndCache } from '../../utils/native-image-utils';
import { KivaApi } from '../../core/kiva-api-service';
import { LoansService } from '../../core/loans-service';
import { LoanCard, FiltersModal } from '../../components';
import { DEFAULT_FILTER, BASE_OFFSET } from '../../app.config';

// TODO: Probably better to build a more generic modal service
import {
  ModalDialogService,
  ModalDialogOptions,
  ModalDialogHost
} from 'nativescript-angular/directives/dialogs';

@Component({
  selector: 'loans-list-page',
  templateUrl: 'pages/list-page/list-page.html',
  directives: [LoanCard, ModalDialogHost],
  providers: [ModalDialogService],
  styleUrls: [
    'pages/list-page/list-page.css',
    'pages/list-page/list-page-shared.css'],
})
export class LoansListPage {
  // TODO: move this to a service
  private searchParams: any = DEFAULT_FILTER;
  private isLoading: boolean = false;
  private currentOffset: number = BASE_OFFSET;
  private error: boolean = false;

  private selectedFilter: string = '';

  constructor(@Inject(KivaApi) private api: KivaApi,
    @Inject(LoansService) private LoansService: LoansService,
    @Inject(ModalDialogService) private modal: ModalDialogService) {
  }

  private _cacheLoanImages(loans: Loan[]) : Loan[] {
    loans.forEach(loan => fetchAndCache(getImageSrc(loan.imageId)));
    return loans;
  }

  // Makes requests to the KivaApi for new pages of loans
  // Uses this.currentOffset to track the number of pages to show
  // the user.
  private _handleFetchLoans() {
    this.isLoading = true;
    this.api.fetchLoans(this.searchParams, this.currentOffset)
      .map((loans: Loan[]) => this._cacheLoanImages(loans))
      .subscribe((loans: Loan[]) => {
        this.LoansService.addLoans(loans);
        this.currentOffset+=20;
        this.isLoading = false;
        this.error = false;
    }, (error) => {
      console.log(JSON.stringify(error));
      this.error = true;
      this.isLoading = false;
    });
  }

  public ngOnInit() {
    this._handleFetchLoans();
  }

  public onLoadMore() {
    // Sometimes this event gets called multiple times based
    // on how a user scrolls, we only want to make the request once
    // Infinite scroll doesn't work on iOS
    if (!this.isLoading && this.LoansService.loans.length >= 20) {
      this._handleFetchLoans();
    }
  }

  public clearFilter() {
    this.searchParams = DEFAULT_FILTER;
    this.currentOffset = BASE_OFFSET;
    this.LoansService.clearLoans();
    this._handleFetchLoans();
  }

  public applyFilter(filter) {
    this.selectedFilter = filter;
    //TODO: put this in separate function
    this.searchParams = {
      'city_state': this.selectedFilter
    };
    this.currentOffset = BASE_OFFSET;
    this.LoansService.clearLoans();
    this._handleFetchLoans();
  }

  public showModal() {
    const options: ModalDialogOptions = {
      context: { filter: this.selectedFilter },
      fullscreen: true
    };

    this.modal.showModal(FiltersModal, options)
      .then((filter) => {
        // This is when the modal is closed
        if (filter) {
          this.applyFilter(filter);
        }
      })
  }

  public selectLoan(event) {
    const selectedLoan: Loan = this.LoansService.getByIndex(event.index);
    this.LoansService.selectLoan(selectedLoan);
  }
}
