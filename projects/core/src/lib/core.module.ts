import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export interface CoreConfig {
  uriApi: string;
}

export const CORE_CONFIG_TOKEN = new InjectionToken<CoreConfig>('CORE_CONFIG');

@NgModule({
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
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: CoreConfig): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: CORE_CONFIG_TOKEN, useValue: config }
      ]
    };
  }
}
