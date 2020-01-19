import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, filter, map, mergeMap, scan, takeUntil } from 'rxjs/operators';
import { sortTools } from './state/sort-tools.actions';
import { asyncScheduler, interval, of, Subject } from 'rxjs';
import { rateTool } from './state/rate-tool.actions';
import { Action } from '@ngrx/store';

const randomInt = (upper: number) => Math.floor(Math.random() * (upper + 1));

@Injectable()
export class AppEffects {
  private _stop = new Subject();

  sortTools$ = createEffect(() => ({ debounce = 500, scheduler = asyncScheduler } = {}) =>
    this.actions$.pipe(
      ofType('[RateTool] RateTool'),
      debounceTime(debounce, scheduler),
      map(() => sortTools())
    )
  );

  stopAutoRateTool$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[AutoRate] stop AutoRate'),
      map(() => {
        this._stop.next();
        return { type: 'any' } as Action;
      })
    )
  );

  startAutoRateTool$ = createEffect(() => ({ intervalTime = 1000 } = {}) =>
    this.actions$.pipe(
      ofType('[AutoRate] start AutoRate'),
      scan((acc, curr) => {
        return Boolean(!curr);
      }),
      mergeMap(() =>
        interval(intervalTime).pipe(
          filter(() => Math.random() > 0.5),
          map(() => rateTool({ index: randomInt(9), rating: randomInt(4) + 1 })),
          takeUntil(this._stop)
        )
      )
    )
  );
  constructor(private actions$: Actions) {}
}
