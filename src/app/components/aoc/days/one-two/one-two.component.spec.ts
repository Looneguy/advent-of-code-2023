import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTwoComponent } from './one-two.component';

describe('OneTwoComponent', () => {
  let component: OneTwoComponent;
  let fixture: ComponentFixture<OneTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
