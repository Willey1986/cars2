import {CarService} from './car.service';
import createSpy = jasmine.createSpy;
import {of} from 'rxjs';

const mockedCars = [
  {
    'Name': 'chevrolet chevelle malibu',
    'Miles_per_Gallon': 18,
    'Cylinders': 8,
    'Displacement': 307,
    'Horsepower': 130,
    'Weight_in_lbs': 3504,
    'Acceleration': 12,
    'Year': '1970-01-01',
    'Origin': 'USA'
  },
  {
    'Name': 'buick skylark 320',
    'Miles_per_Gallon': 15,
    'Cylinders': 8,
    'Displacement': 350,
    'Horsepower': 165,
    'Weight_in_lbs': 3693,
    'Acceleration': 11.5,
    'Year': '1970-01-01',
    'Origin': 'USA'
  },
  {
    'Name': 'plymouth satellite',
    'Miles_per_Gallon': 18,
    'Cylinders': 8,
    'Displacement': 318,
    'Horsepower': 150,
    'Weight_in_lbs': 3436,
    'Acceleration': 11,
    'Year': '1970-01-01',
    'Origin': 'USA'
  },
  {
    'Name': 'amc rebel sst',
    'Miles_per_Gallon': 16,
    'Cylinders': 8,
    'Displacement': 304,
    'Horsepower': 150,
    'Weight_in_lbs': 3433,
    'Acceleration': 12,
    'Year': '1970-01-01',
    'Origin': 'USA'
  },
  {
    'Name': 'ford torino',
    'Miles_per_Gallon': 17,
    'Cylinders': 8,
    'Displacement': 302,
    'Horsepower': 140,
    'Weight_in_lbs': 3449,
    'Acceleration': 10.5,
    'Year': '1970-01-01',
    'Origin': 'USA'
  }
];

describe('CarService', () => {
  let service: CarService;
  let mockClient: any;

  beforeEach(() => {
    mockClient = {
      get: createSpy()
    };
    service = new CarService(mockClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of cars', (done) => {
    mockClient.get.and.callFake(() => of(mockedCars));
    service.getCars()
      .subscribe((cars) => {
        expect(cars.length).toEqual(5);
        expect(mockClient.get.calls.count()).toEqual(1);

        const url = 'https://raw.githubusercontent.com/vega/vega-datasets/gh-pages/data/cars.json';
        expect(mockClient.get.calls.first().args[0]).toEqual(url);

        done();
      });
  });

  it('should return a car matching the given name', (done) => {
    mockClient.get.and.callFake(() => of(mockedCars));
    const carName = 'chevrolet chevelle malibu';
    service.getCarByName(carName)
      .subscribe(car => {
        expect(car).toBeDefined();
        expect(car.Name).toContain(carName);
        done();
      });
  });

  it('should return a car matching the given name', (done) => {
    mockClient.get.and.callFake(() => of(mockedCars));
    const carName = 'bat mobil';
    service.getCarByName(carName)
      .subscribe(car => {
        expect(car).toBeUndefined();
        done();
      });
  });
});

