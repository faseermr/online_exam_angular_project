import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AddClassroomComponent } from './components/class/add-classroom/add-classroom.component';
import { routingComponents } from './app-routing.module';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { ExamTimetableComponent } from './components/exam-timetable/exam-timetable/exam-timetable.component';
import { QuestionPaperComponent } from './components/question-paper/question-paper.component';
import { ReviewPaperComponent } from './components/review-paper/review-paper.component';
import { AddSubjectComponent } from './components/subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/subject/edit-subject/edit-subject.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddClassroomComponent,
    AddSubjectComponent,

    //QuestionPaperComponent,
    //ExamTimetableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
