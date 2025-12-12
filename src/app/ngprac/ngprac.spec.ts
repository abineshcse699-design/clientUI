import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngprac } from './ngprac';

describe('Ngprac', () => {
  let component: Ngprac;
  let fixture: ComponentFixture<Ngprac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngprac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngprac);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
