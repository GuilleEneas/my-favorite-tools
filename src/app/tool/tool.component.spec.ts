import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolComponent } from './tool.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: '<div></div>'
})
class MockRatingComponent {
  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();
}

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolComponent, MockRatingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
    component.tool = {
      name: 'test tool',
      rating: 0
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD updateRating', () => {
    it('should emit ratingChange event', () => {
      spyOn(component.rateTool, 'emit');
      const newRate = 3;

      component.updateRating(newRate);

      expect(component.rateTool.emit).toHaveBeenCalledWith(newRate);
    });
  });
});
