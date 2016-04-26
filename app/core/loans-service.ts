import { Injectable, Inject } from 'angular2/core';
import { ObservableArray } from 'data/observable-array';
import { Loan } from '../globals.d';
import { RouterService } from './router-service';
import { ROUTES } from '../constants';

@Injectable()
export class LoansService {
  constructor(@Inject(RouterService) private router: RouterService) {
  }

  public loans = new ObservableArray([]);
  public selectedLoan = null;

  public addLoans(loans: Loan[]) {
    loans.forEach((loan) => {
      this.loans.push(loan);
    });
  }

  public getByIndex(index: number) {
    return this.loans.getItem(index);
  }

  public clearLoans() {
    this.loans = new ObservableArray([]);
  }

  public selectLoan(loan: Loan) {
    this.selectedLoan = loan;
    this.router.navigateTo(ROUTES.DETAILS);
  }

  // TODO: Add methods as we need them, such as filtering and find by id
}