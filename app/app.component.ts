import 'reflect-metadata';
import 'rxjs/add/operator/map';
import { Component, Input, Inject } from 'angular2/core';
import { RouteConfig } from "angular2/router";
import { NS_ROUTER_DIRECTIVES } from "nativescript-angular/router";
import { topmost } from 'ui/frame';
import { Page } from 'ui/page';
import { LoansListPage } from './pages/list-page/list-page';
import { LoanDetailsPage } from './pages/loan-details-page';
import { ROUTES } from './constants';

@Component({
  selector: 'kiva-app',
  directives: [LoansListPage, NS_ROUTER_DIRECTIVES],
  providers: [],
  template: `
    <StackLayout>
      <page-router-outlet></page-router-outlet>
    </StackLayout>`
})
@RouteConfig([
  {
    path: '/Loans',
    component: LoansListPage,
    name: ROUTES.LOANS,
    useAsDefault: true
  },
  {
    path: '/Loans/Details',
    component: LoanDetailsPage,
    name: ROUTES.DETAILS
  },
])
export class KivaApp {
  private page: Page;
  public ngOnInit() {
    // On android, the action bar is shown by default
    this.page = <Page>topmost().currentPage;
    this.page.actionBarHidden = true;
  }
}
