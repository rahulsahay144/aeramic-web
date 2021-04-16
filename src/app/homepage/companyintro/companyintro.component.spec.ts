import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyintroComponent } from './companyintro.component';

describe('CompanyintroComponent', () => {
  let component: CompanyintroComponent;
  let fixture: ComponentFixture<CompanyintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
