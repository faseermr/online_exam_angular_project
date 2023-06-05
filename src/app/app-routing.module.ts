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
import { ReviewPaperComponent } from './components/review-paper/review-paper.component';
import { EditSubjectComponent } from './components/subject/edit-subject/edit-subject.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {
    path: 'classroom',
    component: ClassroomListComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'classroom/:id',
    component: EditClassroomComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'subject',
    component: SubjectListComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'subject/:id',
    component: EditSubjectComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin-sign-in', component: AdminSignInComponent },
  {
    path: 'post-question',
    component: PostQuestionComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'exam',
    component: ExamTimetableComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'question/student/:subid',
    component: QuestionPaperComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'question/subject/:subid',
    component: QuestionPaperComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'question/review/:stuid',
    component: ReviewPaperComponent,
    canActivate: [AuthGuardGuard],
  },
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
  QuestionPaperComponent,
  ReviewPaperComponent,
  EditSubjectComponent,
];
