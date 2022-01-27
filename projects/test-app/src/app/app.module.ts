import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '../../../core/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({ apiUrl: 'https://randomuser.me/api/' })
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
