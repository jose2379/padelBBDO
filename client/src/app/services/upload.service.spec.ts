import {TestBed, inject} from '@angular/core/testing';

import {UploadService} from './upload.service';

describe('UploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadService]
    });
  });

  it('should ...', inject([UploadService], (service: UploadService) => {
    expect(service).toBeTruthy();
  }));
});
