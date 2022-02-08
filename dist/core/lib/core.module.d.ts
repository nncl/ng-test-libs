import { InjectionToken, ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
export interface CoreConfig {
    uriApi: string;
}
export declare const CORE_CONFIG_TOKEN: InjectionToken<CoreConfig>;
export declare class CoreModule {
    constructor(parentModule?: CoreModule);
    static forRoot(config: CoreConfig): ModuleWithProviders<CoreModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoreModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoreModule>;
}
