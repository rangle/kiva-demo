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
  template: `
    <GridLayout rows="auto, *">
      <ActionBar row="0">
        <StackLayout orientation="horizontal"
          class="actionBar"
          ios:horizontalAlignment="center"
          android:horizontalAlignment="center">
          <Image  class="logo"></Image>
        </StackLayout>
      </ActionBar>
      <loans-list-page row="1"></loans-list-page>
    </GridLayout>
  `
})
export class KivaApp {
  private page: any = null;
  public ngOnInit() {
    // On android, the action bar is shown by default
    this.page = <Page>topmost().currentPage;
    //this.page.actionBarHidden = true;
  }
}
