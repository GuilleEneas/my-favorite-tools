import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, map } from 'rxjs/operators';
import { sortTools } from './state/sort-tools.actions';
import { asyncScheduler } from 'rxjs';

@Injectable()
export class AppEffects {
  sortTools$ = createEffect(() => ({ debounce = 500, scheduler = asyncScheduler } = {}) =>
    this.actions$.pipe(
      ofType('[RateTool] RateTool'),
      debounceTime(debounce, scheduler),
      map(() => sortTools())
    )
  );
  constructor(private actions$: Actions) {}
}
