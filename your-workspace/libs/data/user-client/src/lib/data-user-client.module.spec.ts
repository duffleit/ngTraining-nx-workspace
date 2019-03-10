import { async, TestBed } from '@angular/core/testing';
import { DataUserClientModule } from './data-user-client.module';

describe('DataUserClientModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataUserClientModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataUserClientModule).toBeDefined();
  });
});
