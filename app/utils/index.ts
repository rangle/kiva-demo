import { Loan } from '../globals.d';

// Takes an object and returns a Loan
export function mapToLoan(item: any): Loan {
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
}
