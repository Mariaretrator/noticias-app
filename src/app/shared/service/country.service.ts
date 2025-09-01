import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Country } from '../interface/user.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl = 'https://countriesnow.space/api/v0.1/countries/flag/unicode';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) =>
        response.data.map((country: any, index: number): Country => ({
          id: index.toString(),
          name: `${country.unicodeFlag} ${country.name}`
        }))
      )
    );
  }
}
