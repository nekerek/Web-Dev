import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seventeen } from './seventeen';

describe('Seventeen', () => {
  let component: Seventeen;
  let fixture: ComponentFixture<Seventeen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seventeen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seventeen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
