import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fifteen } from './fifteen';

describe('Fifteen', () => {
  let component: Fifteen;
  let fixture: ComponentFixture<Fifteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fifteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fifteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
