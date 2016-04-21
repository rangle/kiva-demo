import { Injectable } from 'angular2/core';
import { ObservableArray } from 'data/observable-array';
import { Loan } from '../globals.d';
// TODO: find a better way of mocking this stuff
import { loansMocks } from '../mocks/loans';

@Injectable()
export class LoansService {
  public loans = new ObservableArray(loansMocks);

  public addLoans(loans: Loan[]) {
    loans.forEach((loan) => {
      this.loans.push(loan);
    });
  }

  public clearLoans() {
    this.loans = new ObservableArray([]);
  }

  // TODO: Add methods as we need them, such as filtering and find by id
}