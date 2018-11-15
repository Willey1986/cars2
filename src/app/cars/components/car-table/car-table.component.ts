import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {

  @Input() public cars$: Observable;

  @Input() public searchTerm;

  constructor() { }

  ngOnInit() {
  }

  getClass(i) {
    if (i % 2 === 1) {
      return 'evenRow';
    }
  }
}
