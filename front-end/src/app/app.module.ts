import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassDetailComponent } from './pages/class-detail/class-detail.component';
import { DisciplinesComponent } from './pages/disciplines/disciplines.component';
import { DisciplineDetailComponent } from './pages/discipline-detail/discipline-detail.component';
import { DisciplineNewComponent } from './pages/discipline-new/discipline-new.component';
import { DisciplineEditComponent } from './pages/discipline-edit/discipline-edit.component';
import { RegistrationsComponent } from './pages/registrations/registrations.component';
import { RegistrationDetailComponent } from './pages/registration-detail/registration-detail.component';
import { RegistrationNewComponent } from './pages/registration-new/registration-new.component';
import { RegistrationEditComponent } from './pages/registration-edit/registration-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsComponent } from './pages/students/students.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ClassDetailComponent,
    DisciplinesComponent,
    DisciplineDetailComponent,
    DisciplineNewComponent,
    DisciplineEditComponent,
    RegistrationsComponent,
    RegistrationDetailComponent,
    RegistrationNewComponent,
    RegistrationEditComponent,
    StudentsComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
