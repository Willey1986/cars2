import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {

  gridApi;

  columnDefs = [
    {headerName: 'Name', field: 'Name', rowDrag: true},
    {headerName: 'Cylinders', field: 'Cylinders'},
    {headerName: 'Horsepower', field: 'Horsepower'},
    {headerName: 'Year', field: 'Year'},
    {headerName: 'Origin', field: 'Origin'},
  ];

  @Input() public cars: any[];

  @Input() public searchTerm;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }
  
  onCsvExportClicked() {
    this.gridApi.exportDataAsCsv();
  }
}
