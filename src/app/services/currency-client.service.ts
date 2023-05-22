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
        'apikey': 'apikey'
      })
    };
    return this.httpClient.get<RootObject>('https://api.apilayer.com/exchangerates_data/latest?symbols=USD&base=EUR', httpOptions );
  }

}

export interface Rates {
  USD: number;
}

export interface RootObject {
  rates: Rates;
  base: string;
  date: string;
}
