import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErebuniYerevanComponent } from './erebuni-yerevan.component';

describe('ErebuniYerevanComponent', () => {
  let component: ErebuniYerevanComponent;
  let fixture: ComponentFixture<ErebuniYerevanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErebuniYerevanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErebuniYerevanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
