import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngtwo } from './ngtwo';

describe('Ngtwo', () => {
  let component: Ngtwo;
  let fixture: ComponentFixture<Ngtwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngtwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngtwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
