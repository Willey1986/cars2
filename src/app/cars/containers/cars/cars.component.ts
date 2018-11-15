import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';
import {SearchService} from '../../../core/search/search.service';
import {Subscription} from 'rxjs';
import {debounce, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, OnDestroy {

  private cars = this.carService.getAllCars();
  private searchTerm = '';
  private subs: Subscription[] = [];

  constructor(private carService: CarService, private searchService: SearchService) { }

  ngOnInit() {
    const sub = this.searchService.searchTerm$.pipe(debounceTime(500)).subscribe(searchTerm => this.searchTerm = searchTerm);
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }



}
