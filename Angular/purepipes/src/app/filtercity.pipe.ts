import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // pipe decarator
  name: 'cityFilter'
})
export class FiltercityPipe implements PipeTransform {

  transform(cityNames: any, searchText: string): any {

    if (!cityNames) return [];
    if (!searchText) return cityNames;
    searchText = searchText.toLowerCase();
    return cityNames.filter(cityName => {
      return cityName.toLowerCase().includes(searchText);
    })

  }

}
