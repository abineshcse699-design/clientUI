import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  COUNTRY_CARDS_MOCK3,
  SPECIE_MOCK_DATA,
  SPECIE_MOCK_DATA1,
  SPECIE_TABS_MOCK2
} from './specie-mock';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-specie-details',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule,MatCardModule],
  templateUrl: './specie-details.html',
  styleUrls: ['./specie-details.scss']
})
export class SpecieDetails implements OnInit {





    //  STATIC DATA

  specie = SPECIE_MOCK_DATA;
  specie1 = SPECIE_MOCK_DATA1;
  tabs = SPECIE_TABS_MOCK2;

  //  =======================
    //  CARD DATA

  allCards: any[] = [];
  cards: any[] = [];

  /* =======================
     UI STATE
     ======================= */
  showDetailedView = false;
  showDUSView = false;
  showBUTiew = false;

  activeTab = 'protection';

  /* =======================
     SEARCH STATE
     ======================= */
  authorities = [
    'Austria (AT)',
    'Belgium (BE)',
    'Bulgaria (BG)',
    'Chile (CL)',
    'China (CN)',
    'Costa Rica (CR)',
    'France (FR)',
    'Egypt (EG)'
  ];

  searchTerm = '';
  selectedValue = '';
  selectedCountryCode: string | null = null;
  filteredAuthorities: string[] = [];
  isOpen = false;

  /* =======================
     TOGGLE STATE
     ======================= */
  isHigherRank = false;

  /* =======================
     INIT
     ======================= */
  ngOnInit(): void {
    this.allCards = COUNTRY_CARDS_MOCK3;
    this.cards = [...this.allCards];
  }

  /* =======================
     TAB HANDLING
     ======================= */
  setTab(tabId: string): void {
    this.activeTab = tabId;
  }

  /* =======================
     UI TOGGLES
     ======================= */
  toggleMoreDetails(): void {
    this.showDetailedView = !this.showDetailedView;
  }

  toggleDUS(): void {
    this.showDUSView = !this.showDUSView;
  }

  togglebut(): void {
    this.showBUTiew = !this.showBUTiew;
  }

  /* =======================
     SEARCH LOGIC
     ======================= */
  onSearch(term: string): void {
    this.searchTerm = term;

    if (!term) {
      this.filteredAuthorities = [];
      return;
    }

    const lower = term.toLowerCase();
    this.filteredAuthorities = this.authorities.filter(a =>
      a.toLowerCase().includes(lower)
    );
  }

  selectOption(option: string): void {
    this.selectedValue = option;
    this.searchTerm = option;
    this.isOpen = false;
    this.filteredAuthorities = [];

    // ✅ Extract ISO code from "Austria (AT)"
    const match = option.match(/\((.*?)\)/);
    this.selectedCountryCode = match ? match[1] : null;

    this.applyFilters();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.selectedValue = '';
    this.selectedCountryCode = null;
    this.filteredAuthorities = [];
    this.isOpen = false;
    this.applyFilters();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    this.filteredAuthorities = [];
  }

  /* =======================
     FILTER ENGINE
     ======================= */
  applyFilters(): void {
    let filtered = [...this.allCards];

    // 🔍 Filter by selected country
    if (this.selectedCountryCode) {
      filtered = filtered.filter(card =>
        card.code === this.selectedCountryCode
      );
    }

    // 🟢 Higher botanical rank filter
    if (this.isHigherRank) {
      filtered = filtered.filter(card =>
        ['AT', 'BE', 'FR'].includes(card.code)
      );
    }

    this.cards = filtered;
  }

  /* =======================
     TOGGLE HANDLER
     ======================= */
  onHigherRankToggle(event: any): void {
    this.isHigherRank = event.checked;
    this.applyFilters();
  }

  /* =======================
     HELPERS
     ======================= */
  isCardVisible(country: string, code: string): boolean {
    return true;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
