import { TestBed } from '@angular/core/testing';

import { LoginGuard1Guard } from './login-guard1.guard';

describe('LoginGuard1Guard', () => {
  let guard: LoginGuard1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
