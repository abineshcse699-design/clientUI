import { Component } from '@angular/core';
// import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Second } from '../second/second';

@Component({
  selector: 'app-prac1',
  imports: [MatBadgeModule,
     CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatBadgeModule,
    MatDialogModule,
    Second
  ],
  templateUrl: './prac1.html',
  styleUrl: './prac1.scss',
})
export class Prac1 {

// isOpen = false;
// selectedValue = '';

// authorities = [
//   "Austria (AT)",
//   "Belgium (BE)",
//   "Bulgaria (BG)",
//   "Chile (CL)",
//   "China (CN)",
//   "Costa Rica (CR)"
// ];

// cards = [
//   {
//     name: "Austria",
//     code: "AT",
//     contact: "James Donovan",
//     email: "j.donovan@australia.pvp.com",
//     phone: "+54 11 4349 1354",
//     office: "Plant Breeder's Rights",
//     flag: "https://flagcdn.com/w80/au.png"
//   },
//   {
//     name: "Belgium",
//     code: "BE",
//     contact: "Mariano Mangieri",
//     email: "mariano.mangieri@australia.pvp.com",
//     phone: "+54 11 4349 1354",
//     office: "Plant Variety Protection Office",
//     flag: "https://flagcdn.com/w80/au.png"
//   },
//   {
//     name: "Bulgaria",
//     code: "BG",
//     contact: "-",
//     email: "bjo@bg.net",
//     phone: "+54 11 4349 1354",
//     office: "Plant Breeder's Rights",
//     flag: "https://flagcdn.com/w80/fr.png"
//   },
//   {
//     name: "Chile",
//     code: "CL",
//     contact: "Mariano Mangieri",
//     email: "mariano.mangieri@australia.pvp.com",
//     phone: "+54 11 4349 1354",
//     office: "Plant Variety Protection Office",
//     flag: "https://flagcdn.com/w80/cr.png"
//   },
//   {
//     name: "China",
//     code: "CN",
//     contact: "James Donovan",
//     email: "j.donovan@australia.pvp.com",
//     phone: "+54 11 4349 1354",
//     office: "Plant Breeder's Rights",
//     flag: "https://flagcdn.com/w80/au.png"
//   },
//   {
//     name: "Costa Rica",
//     code: "CR",
//     contact: "James Donovan",
//     email: "j.donovan@australia.pvp.com",
//     phone: "+54 11 4349 1354",
//     office: "Plant Breeder's Rights",
//     flag: "https://flagcdn.com/w80/au.png"
//   }
// ];

// filteredCards = this.cards;

// toggleDropdown() {
//   this.isOpen = !this.isOpen;
// }

// selectOption(option: string) {
//   this.selectedValue = option;
//   this.isOpen = false;

//   const code = option.match(/\((.*?)\)/)?.[1];

//   this.filteredCards = this.cards.filter(c => c.code === code);
// }


selectedValue = '';
isOpen = false;

authorities = [
  "Austria (AT)",
  "Belgium (BE)",
  "Bulgaria (BG)",
  "Chile (CL)",
  "China (CN)",
  "Costa Rica (CR)"
];

toggleDropdown() {
  this.isOpen = !this.isOpen;
}

selectOption(option: string) {
  this.selectedValue = option;
  this.isOpen = false;
}

isCardVisible(name: string, code: string): boolean {
  if (!this.selectedValue) return true;
  return this.selectedValue === `${name} (${code})`;
}


}
