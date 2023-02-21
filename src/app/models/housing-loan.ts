import { HousingLoanPayment } from "./housing-loan/housing-loan-payment";

export interface HousingLoan {
    housingLoanPayment: HousingLoanPayment;
    errorMessage: string;
}
