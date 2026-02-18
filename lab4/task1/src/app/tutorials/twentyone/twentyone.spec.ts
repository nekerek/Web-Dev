import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twentyone } from './twentyone';

describe('Twentyone', () => {
  let component: Twentyone;
  let fixture: ComponentFixture<Twentyone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twentyone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twentyone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
