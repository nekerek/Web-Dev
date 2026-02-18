import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eight } from './eight';

describe('Eight', () => {
  let component: Eight;
  let fixture: ComponentFixture<Eight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
