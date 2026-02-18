import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twentytwo } from './twentytwo';

describe('Twentytwo', () => {
  let component: Twentytwo;
  let fixture: ComponentFixture<Twentytwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twentytwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twentytwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
