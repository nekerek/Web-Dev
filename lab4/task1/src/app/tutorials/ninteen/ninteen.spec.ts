import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ninteen } from './ninteen';

describe('Ninteen', () => {
  let component: Ninteen;
  let fixture: ComponentFixture<Ninteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ninteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ninteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
