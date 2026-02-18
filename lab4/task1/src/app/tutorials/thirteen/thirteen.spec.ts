import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thirteen } from './thirteen';

describe('Thirteen', () => {
  let component: Thirteen;
  let fixture: ComponentFixture<Thirteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thirteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thirteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
