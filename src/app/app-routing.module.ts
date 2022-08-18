import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomListComponent } from './components/class/classroom-list/classroom-list.component';
import { EditClassroomComponent } from './components/class/edit-classroom/edit-classroom.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';

const routes: Routes = [
  { path: 'classroom', component: ClassroomListComponent },
  { path: 'classroom/:id', component: EditClassroomComponent },
  { path: 'subject', component: SubjectListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
