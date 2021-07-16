import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangersButtonsComponent } from './rangers-buttons.component';

describe('RangersButtonsComponent', () => {
  let component: RangersButtonsComponent;
  let fixture: ComponentFixture<RangersButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangersButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangersButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
