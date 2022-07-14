import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateSurveyComponent } from './create-update-survey.component';

describe('CreateUpdateSurveyComponent', () => {
  let component: CreateUpdateSurveyComponent;
  let fixture: ComponentFixture<CreateUpdateSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
