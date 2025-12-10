import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourPage } from './four-page';

describe('FourPage', () => {
  let component: FourPage;
  let fixture: ComponentFixture<FourPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
