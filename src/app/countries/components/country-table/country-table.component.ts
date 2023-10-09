import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      img {
        width: 80px;
      }
      .icon {
        width: 40px;
      }
    `,
  ],
})
export class CountryTableComponent {
  @Input()
  countries: Country[] = [];
}
