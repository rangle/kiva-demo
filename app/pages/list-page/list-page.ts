import 'reflect-metadata';
import 'rxjs/add/operator/map';
import { Http } from 'angular2/http';
import {
  Component,
  Input,
  Inject,
} from 'angular2/core';

interface LoanImage {
  id: number;
  template_id: number;
};

interface Loan {
  id: number;
  name: string;
  status: string;
  fundedAmount: number;
  basketAmount: number;
  image: LoanImage;
  use: string;
  activity: string;
  loanAmount: number;
};

@Component({
  selector: 'loans-list-page',
  templateUrl: 'pages/list-page/list-page.html'
})
export class LoansListPage {
  public message: string = 'Hello, Angular!';
  @Input() public loans: Loan[] = [];

  constructor( @Inject(Http) private http: Http) {
  }

  public ngOnInit() {
    this.http.get('http://api.kivaws.org/v1/loans/search.json?per_page=40')
      .map(response => response.json().loans)
      .map(items => {
        return items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            status: item.status,
            fundedAmount: item.funded_amount,
            basketAmount: item.basket_amount,
            image: item.image,
            use: item.use,
            activity: item.activity,
            loanAmount: item.loan_amount,
          };
        });
      })
      .subscribe((loans: Loan[]) => {
        this.loans = loans;
      }, error => console.log(error));
  }

  public getImageSrc(image) {
    return `http://www.kiva.org/img/100/${image.id}.jpg`;
  }
}
