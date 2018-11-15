import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './containers/cars/cars.component';
import {CarTableComponent} from './components/car-table/car-table.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [CarsComponent, CarTableComponent, FilterPipe],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
