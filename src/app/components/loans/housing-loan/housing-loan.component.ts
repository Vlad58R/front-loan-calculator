import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HousingLoan } from 'src/app/models/housing-loan';
import { HousingLoanService } from 'src/app/services/housing-loan/housing-loan.service';

@Component({
  selector: 'app-housing-loan',
  templateUrl: './housing-loan.component.html',
  styleUrls: ['./housing-loan.component.css']
})
export class HousingLoanComponent implements OnInit {

  // Flags for error messages
  amountWrongFormat = false;
  amountTooBig = false;
  amountTooSmall = false;
  yearsWrongFormat = false;
  yearsTooBig = false;
  yearsTooSmall = false;

  formInvalid = false;

  housingLoan: HousingLoan | undefined;

  form = this.formBuilder.group({
    amount: new FormControl('', [
      Validators.required,
      Validators.max(1000000),
      Validators.min(1),
      Validators.pattern("^[0-9]*$"),
    ]),
    years: new FormControl('', [
      Validators.required,
      Validators.max(60),
      Validators.min(1),
      Validators.pattern("^[0-9]*$"),
    ]),
  });

  constructor(private formBuilder: FormBuilder, private houseLoanService: HousingLoanService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn(this.form.value);
    console.warn(this.form);
    if (this.form.valid) {
      this.formInvalid = false;
      console.log('valid');

      this.houseLoanService.getHousingLoan('' + this.form.value.amount, '' + this.form.value.years).subscribe(loan => {
        console.log('loan:');
        console.log(loan);
        this.housingLoan = loan as HousingLoan;
      });
    } else {
      this.formInvalid = true;
      console.log('invalid');
    }
  }

  validateChange(): void {
    if (this.form.value.amount !== '') {
      // Check amount input data format
      if (!this.form.value.amount?.toString().match('^[0-9]*$')) {
        this.amountWrongFormat = true;
      } else {
        this.amountWrongFormat = false;
      }

      // Check amount max value
      if (Number(this.form.value.amount) > 1000000) {
        this.amountTooBig = true;
      } else {
        this.amountTooBig = false;
      }

      // Check amount min value
      if (Number(this.form.value.amount) < 1) {
        this.amountTooSmall = true;
      } else {
        this.amountTooSmall = false;
      }
    }

    if (this.form.value.years !== '') {
      // Check years input data format
      if (!this.form.value.years?.toString().match('^[0-9]*$')) {
        this.yearsWrongFormat = true;
      } else {
        this.yearsWrongFormat = false;
      }

      // Check years max value
      if (Number(this.form.value.years) > 60) {
        this.yearsTooBig = true;
      } else {
        this.yearsTooBig = false;
      }

      // Check years min value
      if (Number(this.form.value.years) < 1) {
        this.yearsTooSmall = true;
      } else {
        this.yearsTooSmall = false;
      }
    }
  }
}
