import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

class UiComponent {
}
UiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: UiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UiComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: UiComponent, selector: "vss-ui", ngImport: i0, template: `
    <button type="button">
      <ng-content></ng-content>
    </button>
  `, isInline: true, styles: ["button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;cursor:pointer;width:100%;line-height:150%;font-size:1.5rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: UiComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vss-ui',
                    template: `
    <button type="button">
      <ng-content></ng-content>
    </button>
  `,
                    styles: [
                        `
      button {
        appearance: none;
        border: 0;
        cursor: pointer;

        width: 100%;

        line-height: 150%;
        font-size: 1.5rem;
      }
    `
                    ]
                }]
        }] });

class UiModule {
}
UiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: UiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: UiModule, declarations: [UiComponent], exports: [UiComponent] });
UiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: UiModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: UiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UiComponent
                    ],
                    imports: [],
                    exports: [
                        UiComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UiComponent, UiModule };
//# sourceMappingURL=ui.mjs.map
