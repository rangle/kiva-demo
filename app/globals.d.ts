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
  status: string;
  use: string;
  sector: Object;
  activity: Object;
  fundedAmount: Money;
  basketAmount: Money;
  loanAmount: Money;
  borrowerCount: number;
  location: LoanLocation;
  image: any;
  imageId: number;
  businessDescription: string;
  purpose: string;
}
