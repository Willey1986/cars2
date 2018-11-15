import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: any[], filterValue: string): any {
    if (!filterValue) {
      return cars;
    }
    return cars.filter(car => {
      const nameMatches = car.Name.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
      const originMatches = car.Origin.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
      return nameMatches || originMatches;
    });
  }


}
