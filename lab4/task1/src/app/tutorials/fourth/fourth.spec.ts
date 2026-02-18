import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fourth } from './fourth';

describe('Fourth', () => {
  let component: Fourth;
  let fixture: ComponentFixture<Fourth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fourth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fourth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
