import { HousingLoanPayments } from "./housing-loan/housing-loan-payments";

export interface HousingLoan {
    payments: HousingLoanPayments[];
    errorMessages: string;
}
