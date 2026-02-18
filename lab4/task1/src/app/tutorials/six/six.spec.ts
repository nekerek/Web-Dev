import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Six } from './six';

describe('Six', () => {
  let component: Six;
  let fixture: ComponentFixture<Six>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Six]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Six);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
