import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { Second } from '../second/second';
import {ChangeDetectionStrategy,  signal} from '@angular/core';
// import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-prac',
  standalone: true,
  imports: [
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
  templateUrl: './prac.html',
  styleUrls: ['./prac.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Prac {
items = [
  {
    upovCode: "BRASS_JUN",
    botanicalName: "Brassica juncea (L.) Czern.",
    cropType: "Vegetable 🥦",
    family: "Brassicaceae",
    otherBotanicalNames: "Brassica juncea (L.) Czern. et Coss. in Czern.",
    commonNames: "Brown mustard; India mustard; Indian mustard; Oriental mustard",
    class: "CLASS 1.2",
    twp: "TWV",
    image: "/abi.png",
    thumbs: ["/main.jpg", "/main.jpg"],
    showBox: false
  }
];

toggleBox(item: any) {
  item.showBox = !item.showBox;
}
readonly panelOpenState = signal(false);



isOpen = false;
selectedValue = '';

authorities = [
  "African Intellectual Property Organization (OAPI)",
  "Argentina (AR)",
  "Australia (AU)",
  "Austria (AT)",
  "Belarus (BY)",
  "Belgium (BE)",
  "Bolivia (BO)"
];

toggleDropdown() {
  this.isOpen = !this.isOpen;
}

selectOption(option: string) {
  this.selectedValue = option;
  this.isOpen = false;
}


}
