import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './pages/about/about.component';
import { UiModule } from 'ui';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({ uriApi: 'https://randomuser.me/api/?gender=female' }),
    UiModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
