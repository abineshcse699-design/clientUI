import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Genie } from './genie';

describe('Genie', () => {
  let component: Genie;
  let fixture: ComponentFixture<Genie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Genie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Genie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
