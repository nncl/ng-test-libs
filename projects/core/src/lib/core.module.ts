import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreComponent } from './core.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceConfig } from './core.service';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  }
}
