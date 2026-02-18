import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fourteen } from './fourteen';

describe('Fourteen', () => {
  let component: Fourteen;
  let fixture: ComponentFixture<Fourteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fourteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fourteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
