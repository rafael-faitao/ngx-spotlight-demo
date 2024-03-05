import { TestBed } from '@angular/core/testing';

import { NgxSpotlightDemoService } from './ngx-spotlight-demo.service';

describe('NgxSpotlightDemoService', () => {
  let service: NgxSpotlightDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSpotlightDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
