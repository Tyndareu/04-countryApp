import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  constructor(private countryService: CountryService) {}
  public countries: Country[] = [];

  searchByCapital(term: string) {
    this.countryService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
