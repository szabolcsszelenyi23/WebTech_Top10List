import { TestBed } from '@angular/core/testing';

import { TopListServiceService } from './top-list-service.service';

describe('TopListServiceService', () => {
  let service: TopListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
