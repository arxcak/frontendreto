
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crypto } from '../interfaces/crypto';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';


  constructor(private http: HttpClient) {}

  getCryptos(): Observable<Crypto[]> {
    const params = {
      vs_currency: 'usd',
    };

    return this.http.get<Crypto[]>(this.apiUrl, { params });
  }

}

