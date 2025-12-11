import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac1 } from './prac1';

describe('Prac1', () => {
  let component: Prac1;
  let fixture: ComponentFixture<Prac1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prac1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prac1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
