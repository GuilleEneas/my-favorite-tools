import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD willSelect', () => {
    it('should set maximum hovered', () => {
      const highestHoveredStar = 3;

      component.willSelect(highestHoveredStar);

      expect(component.highestHovered).toEqual(highestHoveredStar);
    });
  });

  describe('METHOD newRating', () => {
    it('should emit ratingChange event', () => {
      spyOn(component.ratingChange, 'emit');
      const newRate = 3;

      component.rate(newRate);

      expect(component.ratingChange.emit).toHaveBeenCalledWith(newRate);
    });
  });
});
