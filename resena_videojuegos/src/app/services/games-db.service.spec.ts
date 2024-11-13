import { TestBed } from '@angular/core/testing';

import { GamesDBService } from './games-db.service';

describe('GamesDBService', () => {
  let service: GamesDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
