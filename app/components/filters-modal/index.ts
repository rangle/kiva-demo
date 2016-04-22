import { Component, Inject } from 'angular2/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
  selector: 'filters-modal',
  template: `
  <StackLayout margin="24" horizontalAlignment="center" verticalAlignment="center">
    <StackLayout orientation="horizontal">
      <Label text="Current City: " *ngIf="currentFilter"></Label>
      <Label [text]="currentFilter" class="bold"></Label>
    </StackLayout>
    <GridLayout marginTop="12" rows="*, auto">

      <ListView #filterList
        [items]="filters"
        (itemTap)="selectFilter($event)"
        row="0">
        <template #filter="item">
          <StackLayout class="city-filter">
            <Label [text]="filter" class="bold"></Label>
          </StackLayout>
        </template>
      </ListView>

      <Button text="cancel"
        (tap)="selectFilter(null)" row="1">
      </Button>
    </GridLayout>
  </StackLayout>
  `
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
    'Washington D.C.,DC',
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