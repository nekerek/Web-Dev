import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twelve } from './twelve';

describe('Twelve', () => {
  let component: Twelve;
  let fixture: ComponentFixture<Twelve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twelve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twelve);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
