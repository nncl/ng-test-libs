import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CoreService {
    constructor() { }
}
CoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoreComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CoreComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: CoreComponent, selector: "lib-core", ngImport: i0, template: `
    <p>
      core works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-core',
                    template: `
    <p>
      core works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class CoreModule {
}
CoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, declarations: [CoreComponent], exports: [CoreComponent] });
CoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CoreComponent
                    ],
                    imports: [],
                    exports: [
                        CoreComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CoreComponent, CoreModule, CoreService };
//# sourceMappingURL=core.mjs.map
