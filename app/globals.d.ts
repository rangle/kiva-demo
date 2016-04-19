export interface LoanImage {
  id: number;
  templateId: number;
  src: string,
}

export interface LoanLocation {
  countryCode: string;
  country: string;
  town: string;
  state: string;
  lat: number;
  long: number;
}

export interface Money {
  amount: string;
  currency: string;
}

export interface Loan {
  id: number;
  name: string;
  sector: string;
  status: string;
  fundedAmount: Money;
  basketAmount: Money;
  image: any;
  use: string;
  activity: string;
  loanAmount: Money;
  location: LoanLocation;
  imageId: number;
}
