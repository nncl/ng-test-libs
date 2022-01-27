import { ModuleWithProviders } from '@angular/core';
import { UserServiceConfig } from './core.service';
import * as i0 from "@angular/core";
import * as i1 from "./core.component";
import * as i2 from "@angular/common/http";
export declare class CoreModule {
    constructor(parentModule?: CoreModule);
    static forRoot(config: UserServiceConfig): ModuleWithProviders<CoreModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoreModule, [typeof i1.CoreComponent], [typeof i2.HttpClientModule], [typeof i1.CoreComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoreModule>;
}
