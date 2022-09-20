import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperComponent } from './question-paper.component';

describe('QuestionPaperComponent', () => {
  let component: QuestionPaperComponent;
  let fixture: ComponentFixture<QuestionPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
