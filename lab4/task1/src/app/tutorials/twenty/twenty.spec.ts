import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twenty } from './twenty';

describe('Twenty', () => {
  let component: Twenty;
  let fixture: ComponentFixture<Twenty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twenty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twenty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
