import * as i0 from '@angular/core';
import { Injectable, Optional, Component, NgModule, SkipSelf } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

class UserServiceConfig {
    constructor() {
        this.apiUrl = '';
    }
}
class CoreService {
    constructor(http, config) {
        this.http = http;
        this._apiUrl = 'https://randomuser.me/api/';
        if (config) {
            this._apiUrl = config.apiUrl;
        }
    }
    get() {
        return this.http.get(this._apiUrl);
    }
}
CoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, deps: [{ token: i1.HttpClient }, { token: UserServiceConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
CoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: UserServiceConfig, decorators: [{
                        type: Optional
                    }] }];
    } });

class CoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoreComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CoreComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: CoreComponent, selector: "lib-core", ngImport: i0, template: `
    <button type="button">
      <ng-content></ng-content>
    </button>
  `, isInline: true, styles: ["button{width:100%;line-height:36px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-core',
                    template: `
    <button type="button">
      <ng-content></ng-content>
    </button>
  `,
                    styles: [
                        `
      button {
        width: 100%;
        line-height: 36px;
      }
    `
                    ]
                }]
        }], ctorParameters: function () { return []; } });

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
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}
CoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
CoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, declarations: [CoreComponent], imports: [HttpClientModule], exports: [CoreComponent] });
CoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, imports: [[
            HttpClientModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CoreComponent
                    ],
                    imports: [
                        HttpClientModule
                    ],
                    exports: [
                        CoreComponent
                    ]
                }]
        }], ctorParameters: function () {
        return [{ type: CoreModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    } });

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CoreComponent, CoreModule, CoreService, UserServiceConfig };
//# sourceMappingURL=core.mjs.map
