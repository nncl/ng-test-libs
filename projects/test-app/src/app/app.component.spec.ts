import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UiModule } from 'ui';
import { CoreModule } from 'core';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

        CoreModule.forRoot({ uriApi: 'https://randomuser.me/api/?gender=female' }),
        UiModule
      ],
      declarations: [
        AppComponent,
        AboutComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-app');
  });

  it('should render list items', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const list = compiled.querySelectorAll('li');

    expect(list.length).toBe(3);
  });
});
