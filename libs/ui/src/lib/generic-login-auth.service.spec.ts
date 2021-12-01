import { TestBed } from '@angular/core/testing';

import { GenericLoginAuthService } from './generic-login-auth.service';

describe('GenericLoginAuthService', () => {
  let service: GenericLoginAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericLoginAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
