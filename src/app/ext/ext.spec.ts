import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ext } from './ext';

describe('Ext', () => {
  let component: Ext;
  let fixture: ComponentFixture<Ext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
