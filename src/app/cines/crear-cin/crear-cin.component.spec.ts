import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCinComponent } from './crear-cin.component';

describe('CrearCinComponent', () => {
  let component: CrearCinComponent;
  let fixture: ComponentFixture<CrearCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
