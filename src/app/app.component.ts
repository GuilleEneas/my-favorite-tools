import { Component, OnInit } from '@angular/core';
import { Tool } from './models/tool.type';
import { Store } from '@ngrx/store';
import { State } from './state';
import { Observable } from 'rxjs';
import { rateTool } from './state/rate-tool.actions';
import { startAutoRate, stopAutoRate } from './state/auto-rate.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Favorite Tools';
  tools$: Observable<Tool[]>;
  private randomGenerationOn: boolean;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.tools$ = this.store.select('tools');
  }

  rateTool(index: number, rating: number) {
    this.store.dispatch(rateTool({ index, rating }));
  }

  toggleRandom() {
    if (this.randomGenerationOn) {
      this.store.dispatch(stopAutoRate());
    } else {
      this.store.dispatch(startAutoRate());
    }
    this.randomGenerationOn = !this.randomGenerationOn;
  }
}
