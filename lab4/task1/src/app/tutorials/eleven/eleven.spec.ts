import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eleven } from './eleven';

describe('Eleven', () => {
  let component: Eleven;
  let fixture: ComponentFixture<Eleven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eleven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eleven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
