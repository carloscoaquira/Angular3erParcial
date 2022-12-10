import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorGenerosComponent } from './selector-generos.component';

describe('SelectorGenerosComponent', () => {
  let component: SelectorGenerosComponent;
  let fixture: ComponentFixture<SelectorGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorGenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
