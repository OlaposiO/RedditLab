import { TestBed } from '@angular/core/testing';

import { AwwSubredditServiceService } from './aww-subreddit-service.service';

describe('AwwSubredditServiceService', () => {
  let service: AwwSubredditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwwSubredditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
