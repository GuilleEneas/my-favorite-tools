import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {
  @Input() rating: number; // between 1 and 5
  @Output() ratingChange = new EventEmitter<number>();
  iconThemes: string[] = [];
  highestHovered = -1;
  private readonly maxRating = 5;

  ngOnChanges() {
    this.iconThemes = _.times(this.maxRating, time => time < this.rating);
  }

  willSelect(index: number) {
    this.highestHovered = index;
  }

  rate(newRating: number) {
    this.ratingChange.emit(newRating);
  }
}
