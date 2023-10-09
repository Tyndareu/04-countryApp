import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',

})
export class ByCountryPageComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  public countries: Country[] = [];
  public initialValue = ''

  ngOnInit(): void {
   this.countries = this.countryService.cacheStore.byCountries.countries;
   this.initialValue = this.countryService.cacheStore.byCountries.term;
  }
  
  searchByCountry(term: string) {
    this.countryService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
