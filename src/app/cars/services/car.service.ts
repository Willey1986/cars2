import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../models/car';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('https://raw.githubusercontent.com/vega/vega-datasets/gh-pages/data/cars.json');
  }

  getCarByName(name: string): Observable<Car> {
    return this.getCars()
      .pipe(
        map(cars => cars.find(car => car.Name === name))
      );
  }

}
