import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {

  @Input() public cars: any[];

  @Input() public searchTerm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getClass(i) {
    if (i % 2 === 1) {
      return 'evenRow';
    }
  }

  onRowClicked(rowNumber) {
    console.log(rowNumber);
    this.router.navigate(['cars', rowNumber]);
  }
}
