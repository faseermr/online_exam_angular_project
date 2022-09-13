import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTimetableComponent } from './exam-timetable.component';

describe('ExamTimetableComponent', () => {
  let component: ExamTimetableComponent;
  let fixture: ComponentFixture<ExamTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamTimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
