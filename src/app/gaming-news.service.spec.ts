import { TestBed } from '@angular/core/testing';

import { GamingNewsService } from './gaming-news.service';

describe('GamingNewsService', () => {
  let service: GamingNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamingNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
