import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './containers/cars/cars.component';
import {CarTableComponent} from './components/car-table/car-table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [CarsComponent, CarTableComponent, FilterPipe, CarDetailComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class CarsModule { }
