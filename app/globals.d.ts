export interface LoanImage {
  id: number;
  template_id: number;
}

export interface LoanLocation {
  countryCode: string;
  country: string;
  town: string;
}

export interface Loan {
  id: number;
  name: string;
  status: string;
  fundedAmount: number;
  basketAmount: number;
  image: LoanImage;
  use: string;
  activity: string;
  loanAmount: number;
  location?: LoanLocation;
}
