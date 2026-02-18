import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ten } from './ten';

describe('Ten', () => {
  let component: Ten;
  let fixture: ComponentFixture<Ten>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ten]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ten);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
