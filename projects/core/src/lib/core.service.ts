import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Users {
  results: [],
  info: object
}

export class UserServiceConfig {
  apiUrl = '';
}

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  _apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient,
              @Optional() config?: UserServiceConfig) {
    if (config) {
      this._apiUrl = config.apiUrl;
    }
  }

  get(): Observable<Users> {
    return this.http.get<Users>(this._apiUrl);
  }
}
