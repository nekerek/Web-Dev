import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nine } from './nine';

describe('Nine', () => {
  let component: Nine;
  let fixture: ComponentFixture<Nine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
