import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { HousingLoan } from 'src/app/models/housing-loan';

@Injectable({
  providedIn: 'root'
})
export class HousingLoanService {

  private housingLoanUrl: string;

  constructor(private http: HttpClient) {
    this.housingLoanUrl = 'http://localhost:8080/loan/housing';
  }

  public getHousingLoan(amount: string, years: string): Observable<HousingLoan> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("amount", amount).append("years", years);
    return this.http.get<HousingLoan>(this.housingLoanUrl, { params: queryParams });
  }
}
