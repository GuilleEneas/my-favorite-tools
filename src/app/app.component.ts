import { Component, OnInit } from '@angular/core';
import { Tool } from './models/tool.type';
import { Store } from '@ngrx/store';
import { State } from './state';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Favorite Tools';

  tools$: Observable<Tool[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.tools$ = this.store.select('tools');
  }
}
