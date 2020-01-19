import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Tool } from './models/tool.type';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { rateTool } from './state/rate-tool.actions';

@Component({
  selector: 'app-tool',
  template: '<div></div>'
})
class MockToolComponent {
  @Input() tool: Tool;
  @Output() rateTool = new EventEmitter<number>();
}

describe('AppComponent', () => {
  const mockTools: Tool[] = [{ name: 'mock tool', rating: 0 }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockToolComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select() {
              return of(mockTools);
            },
            dispatch() {}
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'My Favorite Tools'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My Favorite Tools');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('My Favorite Tools');
  });

  it(`should render ${mockTools.length} tasks`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const tools = fixture.debugElement.queryAll(By.css('.tool'));
    expect(tools.length).toEqual(mockTools.length);
  });

  describe('METHOD rateTool', () => {
    it('should dispatch rateTool action', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const component = fixture.componentInstance;
      const componentService = fixture.debugElement.injector.get(Store);
      spyOn(componentService, 'dispatch');
      const expectedAction = rateTool({ index: 0, rating: 3 });

      component.rateTool(0, 3);

      expect(componentService.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
