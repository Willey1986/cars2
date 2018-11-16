import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsComponent} from './containers/cars/cars.component';
import {CarDetailComponent} from './components/car-detail/car-detail.component';

const routes: Routes = [
  {path: '', component: CarsComponent},
  {path: ':id', component: CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
