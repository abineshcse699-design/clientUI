// import { Component } from '@angular/core';

import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
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
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Second } from '../second/second';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { A11yModule } from "@angular/cdk/a11y";


@Component({
  selector: 'app-ngprac',
  imports: [
     MatExpansionModule,
     MatSlideToggleModule,
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
    Second,
    A11yModule
  ],
  templateUrl: './ngprac.html',
  styleUrl: './ngprac.scss',
})
export class Ngprac {


   products=[



{sku:1,id:'ANANA',name:'Ananas Mill',price:'Pineapple',details:'Bromeliaceae',image:'./emp1.png'},
{sku:1,id:'BRASS_OLE',name:'Brassica oleracea L.',price:'',details:'Brassicaceae',image:'./a1.png'},
{sku:1,id:'BRASS_CAR',name:'Brassica caterinata A..Braun',price:'Abyssinnian cabbage;',details:'Brassicaceae',image:'./h.png'},
{sku:1,id:'AGAPA',name:'Agapanthus L `Her ',price:'African Lily',details:'Agapanthaceae',image:'./emp.png'},
{sku:1,id:'BRASS_CAR',name:'Brassica caterinata A..Braun',price:'Abyssinnian cabbage;chou E...',details:'ed',image:'./h.png'},
     {sku:1,id:'CAMPA_LTL',name:'iphone',price:'n2',details:'Campanulaceae',image:'./k.png'},

    ]




  products1=[


{sku:1,id:'BRASS_CAR',name:'Brassica oleracea L.',price:'Abyssin cabbage;chou E...',details:'Brassicaceae',image:'./h.png'},
{sku:1,id:'CAMPA_LTL',name:'Campanula latiloba A.DC',price:'',details:'Campanulaseae',image:'./k.png'},
{sku:1,id:'CALCN_FLO',name:'Calycanthus florida L. ',price:'Carolina-allspice;pineapple-...',details:'Iradaceae',image:'./r.jpg'},
{sku:1,id:'AGAPA',name:'Agapanthus L `Her',price:'african Lily',details:'Agapanthaceae',image:'./emp2.png'},

{sku:1,id:'ANANA',name:'Ananas Mill',price:'Pineapple',details:'Bromeliaceae',image:'./j.png'},
// {sku:1,name:'',price:99.98,details:'',image:'./main.jpg'},
     {sku:1,id:'BRASS_OLE',name:'Brassica oleracea L.',price:99.98,details:'Brassicaceae',image:'./a1.png'},

    ]

    product2=[

{sku:1,name:'Mr Anish Singh Cheif of PBR',Address:'IP Autralia ,Discovery House ,47 Bowes Street P.O>BOx 200 ,Philipp 2606',email1:'anish.singh@ipaustalia.gov.au',email2:'legistration@ipaustralia.gov.au',email3:'cheif.PBR@ipaurstralia.gov.au'},

    ]




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

  //-------------------------------
  //  HIGHER BOTANICAL RANK TOGGLE
  //-------------------------------

  showHigherRank = false;

  // EXACT values used inside your *ngIf="isCardVisible(name, code)"
  higherRankCountries = [
    { name: 'Bulgaria', code: 'Bg' },
    { name: 'Chile', code: 'CL' },
    { name: 'Costa', code: 'Rica' },
    // { name: 'CostaRica', code: 'CR' },
    { name: 'France', code: 'fr' }
  ];

  onHigherRankToggle(event: any) {
    this.showHigherRank = event.checked;
  }

  //----------------------------------
  //          CARD VISIBILITY LOGIC
  //----------------------------------
  isCardVisible(name: string, code: string): boolean {

    // 1️⃣ If toggle ON → show ONLY screenshot cards
    if (this.showHigherRank) {
      return this.higherRankCountries.some(
        c => c.name === name && c.code === code
      );
    }

    // 2️⃣ If toggle OFF → normal dropdown behavior
    if (!this.selectedValue) return true;

    return this.selectedValue === `${name} (${code})`;
  }

  //----------------------------------
  //   MORE DETAILS SECTION (YOURS)
  //----------------------------------
// For Protection section



// For DUS section


showBUTiew = false;

togglebut() {
  this.showBUTiew = !this.showBUTiew;
  console.log("DUS toggled:", this.showBUTiew);
}





  //


activeTab: string = 'protection';

setTab(tab: string) {
  this.activeTab = tab;
}



}
