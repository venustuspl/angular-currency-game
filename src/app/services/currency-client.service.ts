import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyClientService {

constructor(private httpClient: HttpClient) {
}

  public getCurrency(): Observable<RootObject> {
    let headers = new HttpHeaders();
    const httpOptions = {
      headers: new HttpHeaders({
        'apikey': '8bxHwArNzYJPbz6YwnbsT81mSSbFbudN'
      })
    };
    return this.httpClient.get<RootObject>('https://api.apilayer.com/exchangerates_data/latest', httpOptions );
  }

}

export interface Rates {
  CAD: number;
  HKD: number;
  ISK: number;
  PHP: number;
  DKK: number;
  HUF: number;
  CZK: number;
  AUD: number;
  RON: number;
  SEK: number;
  IDR: number;
  INR: number;
  BRL: number;
  RUB: number;
  HRK: number;
  JPY: number;
  THB: number;
  CHF: number;
  SGD: number;
  PLN: number;
  BGN: number;
  TRY: number;
  CNY: number;
  NOK: number;
  NZD: number;
  ZAR: number;
  USD: number;
  MXN: number;
  ILS: number;
  GBP: number;
  KRW: number;
  MYR: number;
}


export interface RootObject {
  rates: Rates;
  base: string;
  date: string;
  success: boolean;
  timestamp: number;
}
