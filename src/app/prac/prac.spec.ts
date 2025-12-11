import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac } from './prac';

describe('Prac', () => {
  let component: Prac;
  let fixture: ComponentFixture<Prac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prac);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
