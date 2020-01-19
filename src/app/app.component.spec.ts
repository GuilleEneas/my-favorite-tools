import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Tool } from './models/tool.type';

describe('AppComponent', () => {
  const mockTools: Tool[] = [{ name: 'mock tool', rating: 0 }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select() {
              return of(mockTools);
            }
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
});
