import { TestBed } from '@angular/core/testing';

import { IndependentLearning } from './independent-learning';

describe('IndependentLearning', () => {
  let service: IndependentLearning;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndependentLearning);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



