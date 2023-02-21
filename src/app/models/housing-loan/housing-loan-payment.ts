import { HousingLoanMonthlyPayment } from "./housing-loan-monthly-payment";

export interface HousingLoanPayment {
    totalPayment: number;
    percentagePayment: number;
    loanPayment: number;
    housingLoanMonthlyPayments: HousingLoanMonthlyPayment[];
}
