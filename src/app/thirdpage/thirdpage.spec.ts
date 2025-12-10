import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thirdpage } from './thirdpage';

describe('Thirdpage', () => {
  let component: Thirdpage;
  let fixture: ComponentFixture<Thirdpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thirdpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thirdpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
