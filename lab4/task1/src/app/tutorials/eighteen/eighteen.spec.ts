import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eighteen } from './eighteen';

describe('Eighteen', () => {
  let component: Eighteen;
  let fixture: ComponentFixture<Eighteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eighteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eighteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
