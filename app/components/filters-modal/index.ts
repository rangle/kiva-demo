import { Component, Inject } from 'angular2/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { CITY_FILTERS } from '../../constants';
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
  private filters: any[] = CITY_FILTERS;
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
