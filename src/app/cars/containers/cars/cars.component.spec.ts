import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CarService} from '../../services/car.service';

class MockCarService {
  getCars() {}
}

fdescribe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: CarService, useClass: MockCarService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
