import 'reflect-metadata';
import 'rxjs/add/operator/map';
import {
  Component,
  Input,
  Inject,
} from 'angular2/core';
import { LoansListPage } from './pages/list-page/list-page';

@Component({
  selector: 'kiva-app',
  directives: [LoansListPage],
  template: `<loans-list-page></loans-list-page>`
})
export class KivaApp {
}
