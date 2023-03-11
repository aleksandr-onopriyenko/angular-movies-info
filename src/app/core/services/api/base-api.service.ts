import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BaseApiService {
  private http = inject(HttpClient);

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public post<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body);
  }

  public put<T>(url: string, body: T): Observable<T> {
    return this.http.put<T>(url, body);
  }

  public delete<T>(url: string): Observable<string | T> {
    return this.http.delete<string>(url);
  }
}
