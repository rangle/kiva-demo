import { Loan } from '../globals.d';
import { NativeImage } from './native-image-utils';
// Takes an object and returns a Loan
export function mapToLoan(item: any): Loan {
  return {
    id: item.id,
    name: item.name,
    status: item.status,
    fundedAmount: item.funded_amount,
    basketAmount: item.basket_amount,
    sector: item.sector,
    // image: {
    //   id: item.image.id,
    //   templateId: item.image.template_id,
    //   src: getImageSrc(item.image.id)
    // },
    imageId: item.image.id,
    image: new NativeImage(getImageSrc(item.image.id)),
    use: item.use,
    activity: item.activity,
    loanAmount: item.loan_amount,
    location: {
      country: item.location.country,
      countryCode: item.location.country_code,
      town: item.location.town
    }
  };
}

export function getImageSrc(imageId: number) : string {
  return 'http://www.kiva.org/img/128/' + imageId + '.jpg';
}

export function calcFundingProgress(goal: number, funded: number) : number {
  return Math.round((funded / goal) * 100);
}
