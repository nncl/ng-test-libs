import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export interface Users {
    results: [];
    info: object;
}
export declare class UserServiceConfig {
    apiUrl: string;
}
export declare class CoreService {
    private http;
    _apiUrl: string;
    constructor(http: HttpClient, config?: UserServiceConfig);
    get(): Observable<Users>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CoreService>;
}
