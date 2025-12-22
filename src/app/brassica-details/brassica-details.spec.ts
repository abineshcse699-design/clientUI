import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrassicaDetails } from './brassica-details';

describe('BrassicaDetails', () => {
  let component: BrassicaDetails;
  let fixture: ComponentFixture<BrassicaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrassicaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrassicaDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
