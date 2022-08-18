import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassroomListComponent } from './components/class/classroom-list/classroom-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { AddClassroomComponent } from './components/class/add-classroom/add-classroom.component';
import { EditClassroomComponent } from './components/class/edit-classroom/edit-classroom.component';
@NgModule({
  declarations: [
    AppComponent,
    ClassroomListComponent,
    SubjectListComponent,
    AddClassroomComponent,
    EditClassroomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
