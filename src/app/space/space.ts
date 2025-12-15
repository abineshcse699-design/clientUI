import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './space.html',
  styleUrls: ['./space.scss']
})
export class Space {

  // -------- SPECIES DATA --------
speciesList = [
  { code: 'ANANA', name: 'Ananas Mill' },
  { code: 'BRASS_OLE', name: 'Brassica oleracea L.' },
  { code: 'BRASS_CAR', name: 'Brassica carinata A. Braun' },
];

// -------- SEARCH STATE --------
searchText = '';
filteredSpecies: any[] = [];
dropdownOpen = false;
selectedSpecies: any = null;

ngOnInit() {
  this.filteredSpecies = this.speciesList;
}

// -------- SEARCH FILTER --------
onSearchSpecies(value: string) {
  this.searchText = value;
  this.dropdownOpen = true;

  const v = value.toLowerCase();

  this.filteredSpecies = this.speciesList.filter(s =>
    s.name.toLowerCase().includes(v) ||
    s.code.toLowerCase().includes(v)
  );
}

// -------- SELECT ITEM --------
selectSpecies(species: any) {
  this.selectedSpecies = species;
  this.searchText = `${species.name} (${species.code})`;
  this.dropdownOpen = false;
}


}
