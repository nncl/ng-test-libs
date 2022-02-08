import * as i0 from '@angular/core';
import { InjectionToken, NgModule, Optional, SkipSelf, Injectable, Inject } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const CORE_CONFIG_TOKEN = new InjectionToken('CORE_CONFIG');
class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: CORE_CONFIG_TOKEN, useValue: config }
            ]
        };
    }
}
CoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
CoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, imports: [CommonModule,
        HttpClientModule] });
CoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, imports: [[
            CommonModule,
            HttpClientModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                    // CoreComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    exports: [
                    // CoreComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: CoreModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });

// FIXME
// export class UserServiceConfig {
//   apiUrl = '';
// }
// TODO WHAT ABOUT NOT PROVIDING IT??? - https://flowup.cz/en/article/dependency-injection-in-angular-libraries
// TODO {providedIn: 'root'}
class CoreService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this._apiUrl = 'https://randomuser.me/api/';
        if (config?.uriApi) {
            this._apiUrl = config.uriApi;
        }
    }
    get() {
        return this.http.get(this._apiUrl);
    }
}
CoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, deps: [{ token: i1.HttpClient }, { token: CORE_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
CoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [CORE_CONFIG_TOKEN]
                }] }]; } });

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CORE_CONFIG_TOKEN, CoreModule, CoreService };
//# sourceMappingURL=core.mjs.map
