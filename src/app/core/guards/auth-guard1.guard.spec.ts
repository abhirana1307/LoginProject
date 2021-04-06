import { TestBed } from '@angular/core/testing';

import { AuthGuard1Guard } from './auth-guard1.guard';

describe('AuthGuard1Guard', () => {
  let guard: AuthGuard1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
