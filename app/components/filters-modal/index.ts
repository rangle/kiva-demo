import { Component, Inject } from 'angular2/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
  selector: 'filters-modal',
  templateUrl: 'components/filters-modal/template.html',
  directives: [],
  providers: [],
  styleUrls: [
    'components/filters-modal/styles.css',
    'components/filters-modal/styles-shared.css'
  ]
})
export class FiltersModal {
  public currentFilter: string;
  public selectedFilterIndex: number;
  private filters: any[] = [
    'San Francisco,CA',
    'New York,NY',
    'Los Angeles,CA',
    'Detroit,MI',
    'Little Rock,AR',
    'Louisville,KT',
    'Newark,NJ',
    'New Orleans,LA',
    'Philadelphia,PA',
    'Pittsburg,PA',
    'Richmond,VA',
    'Washington D.C.,DC'
  ];
  constructor(@Inject(ModalDialogParams) private params: ModalDialogParams) {
    this.currentFilter = params.context.filter || 'None';
  }

  public close(res: string) {
    this.params.closeCallback(res);
  }

  public selectFilter(event) {
    if (event) {
      this.selectedFilterIndex = event.index;
      this.params.closeCallback(this.filters[this.selectedFilterIndex]);
    } else {
      this.params.closeCallback(null);
    }
  }
}
