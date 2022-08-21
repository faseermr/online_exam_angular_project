import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignInComponent } from './components/auth/admin-sign-in/admin-sign-in.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { ClassroomListComponent } from './components/class/classroom-list/classroom-list.component';
import { EditClassroomComponent } from './components/class/edit-classroom/edit-classroom.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';

const routes: Routes = [
  { path: 'classroom', component: ClassroomListComponent },
  { path: 'classroom/:id', component: EditClassroomComponent },
  { path: 'subject', component: SubjectListComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin-sign-in', component: AdminSignInComponent },
  { path: 'dashboard', component: DashboardComponent },
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
];
