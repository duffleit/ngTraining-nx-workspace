import { async, TestBed } from '@angular/core/testing';
import { FeatureUserWidgetModule } from './feature-user-widget.module';

describe('FeatureUserWidgetModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureUserWidgetModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureUserWidgetModule).toBeDefined();
  });
});
