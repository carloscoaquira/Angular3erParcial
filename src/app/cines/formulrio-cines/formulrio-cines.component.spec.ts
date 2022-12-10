import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulrioCinesComponent } from './formulrio-cines.component';

describe('FormulrioCinesComponent', () => {
  let component: FormulrioCinesComponent;
  let fixture: ComponentFixture<FormulrioCinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulrioCinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulrioCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
