import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';
import { HttpClientModule } from '@angular/common/http';

describe('CoreService', () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
