import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AppEffects } from './app.effects';
import { getTestScheduler, hot } from 'jasmine-marbles';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<AppEffects>(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('sortTools$', () => {
    it('should dispatch sortTools for rateTool', () => {
      actions$ = hot('-a--', {
        a: { type: '[RateTool] RateTool' }
      });

      const expected = hot('---a-', {
        a: {
          type: '[SortTools] SortTools'
        }
      });

      expect(
        effects.sortTools$({
          debounce: 20,
          scheduler: getTestScheduler()
        })
      ).toBeObservable(expected);
    });

    it('should do nothing for unknown action', () => {
      actions$ = hot('-a--', {
        a: { type: '[Unknown action]' }
      });

      const expected = hot('-', {
        a: {
          type: '[SortTools] SortTools'
        }
      });

      expect(
        effects.sortTools$({
          debounce: 20,
          scheduler: getTestScheduler()
        })
      ).toBeObservable(expected);
    });
  });
});
