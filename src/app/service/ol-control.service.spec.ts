import { TestBed } from '@angular/core/testing';

import { OlControlService } from './ol-control.service';

describe('OlControlService', () => {
  let service: OlControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
