import { TestBed } from '@angular/core/testing';

import { InputCommunicationServiceService } from './input-communication-service.service';

describe('InputCommunicationServiceService', () => {
  let service: InputCommunicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputCommunicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
