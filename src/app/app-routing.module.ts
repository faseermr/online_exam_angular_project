import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignInComponent } from './components/auth/admin-sign-in/admin-sign-in.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { ClassroomListComponent } from './components/class/classroom-list/classroom-list.component';
import { EditClassroomComponent } from './components/class/edit-classroom/edit-classroom.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ExamTimetableComponent } from './components/exam-timetable/exam-timetable/exam-timetable.component';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';
import { QuestionPaperComponent } from './components/question-paper/question-paper.component';

const routes: Routes = [
  { path: 'classroom', component: ClassroomListComponent },
  { path: 'classroom/:id', component: EditClassroomComponent },
  { path: 'subject', component: SubjectListComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin-sign-in', component: AdminSignInComponent },
  { path: 'post-question', component: PostQuestionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exam', component: ExamTimetableComponent },
  { path: 'question/student/:subid', component: QuestionPaperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ClassroomListComponent,
  EditClassroomComponent,
  SubjectListComponent,
  SignInComponent,
  AdminSignInComponent,
  DashboardComponent,
  PostQuestionComponent,
  ExamTimetableComponent,
];
