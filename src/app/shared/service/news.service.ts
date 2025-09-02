import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.ApiKey;
  private apiUrl = environment.ApiUrl;

  constructor(private http: HttpClient) {}

  getEverything(query: string = 'bitcoin', page: number = 1): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/everything?q=${query}&page=${page}&pageSize=10&sortBy=publishedAt&apiKey=${this.apiKey}`
    );
  }
}
