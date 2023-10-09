import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit{
  constructor(private countryService: CountryService) {}

  public countries: Country[] =[];
  public isLoading = false;
  public initialValue = ''

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }
  searchByCapital(term: string) {
    this.isLoading= true
    this.countryService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading= false
    });
  }
}
