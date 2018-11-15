import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars() {
    return this.http.get('https://raw.githubusercontent.com/vega/vega-datasets/gh-pages/data/cars.json');
  }
}
