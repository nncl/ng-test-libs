import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoreConfig } from './core.module';
import * as i0 from "@angular/core";
export interface Users {
    results: [];
    info: object;
}
export declare class CoreService {
    private http;
    private readonly config?;
    _apiUrl: string;
    constructor(http: HttpClient, config?: CoreConfig | undefined);
    get(): Observable<Users>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CoreService>;
}
