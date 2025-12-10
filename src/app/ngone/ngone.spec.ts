import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngone } from './ngone';

describe('Ngone', () => {
  let component: Ngone;
  let fixture: ComponentFixture<Ngone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
