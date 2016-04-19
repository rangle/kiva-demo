import { Injectable } from 'angular2/core';
import { ObservableArray } from 'data/observable-array';
import { Loan } from '../globals.d';

@Injectable()
export class LoansService {
  public loans = new ObservableArray([]);

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