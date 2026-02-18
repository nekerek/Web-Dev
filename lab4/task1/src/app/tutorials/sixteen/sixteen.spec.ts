import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sixteen } from './sixteen';

describe('Sixteen', () => {
  let component: Sixteen;
  let fixture: ComponentFixture<Sixteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sixteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sixteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
