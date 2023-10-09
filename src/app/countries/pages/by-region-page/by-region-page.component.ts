import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',

})
export class ByRegionPageComponent {
  constructor(private countryService: CountryService) {}

  countries: Country[] = [];

  searchByRegion(term:string){
    this.countryService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    })
    
  }
}
