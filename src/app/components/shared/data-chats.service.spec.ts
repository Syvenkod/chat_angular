import { TestBed } from '@angular/core/testing';

import { DataChatsService } from './data-chats.service';

describe('DataChatsService', () => {
  let service: DataChatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataChatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
