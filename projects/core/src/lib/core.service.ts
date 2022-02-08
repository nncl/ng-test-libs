import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CORE_CONFIG_TOKEN, CoreConfig } from './core.module';

export interface Users {
  results: [],
  info: object
}

// FIXME
// export class UserServiceConfig {
//   apiUrl = '';
// }

// TODO WHAT ABOUT NOT PROVIDING IT??? - https://flowup.cz/en/article/dependency-injection-in-angular-libraries
// TODO {providedIn: 'root'}
@Injectable({ providedIn: 'root' })
export class CoreService {
  _apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient,
              @Optional() @Inject(CORE_CONFIG_TOKEN) private readonly config?: CoreConfig) {
    if (config?.uriApi) {
      this._apiUrl = config.uriApi;
    }
  }

  get(): Observable<Users> {
    return this.http.get<Users>(this._apiUrl);
  }
}
