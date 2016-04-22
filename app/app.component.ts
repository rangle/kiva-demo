import 'reflect-metadata';
import 'rxjs/add/operator/map';
import {
  Component,
  Input,
  Inject,
} from 'angular2/core';
import { LoansListPage } from './pages/list-page/list-page';
import { topmost } from 'ui/frame';
import { Page } from 'ui/page';

@Component({
  selector: 'kiva-app',
  directives: [LoansListPage],
  template: `<loans-list-page></loans-list-page>`
})
export class KivaApp {
  private page: any = null;
  public ngOnInit() {
    // On android, the action bar is shown by default
    this.page = <Page>topmost().currentPage;
    //this.page.actionBarHidden = true;
  }
}
