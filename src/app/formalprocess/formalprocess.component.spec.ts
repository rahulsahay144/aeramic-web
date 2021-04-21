import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalprocessComponent } from './formalprocess.component';

describe('FormalprocessComponent', () => {
  let component: FormalprocessComponent;
  let fixture: ComponentFixture<FormalprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
