import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassDetailComponent } from './pages/class-detail/class-detail.component';
import { DisciplinesComponent } from './pages/disciplines/disciplines.component';
import { DisciplineDetailComponent } from './pages/discipline-detail/discipline-detail.component';
import { DisciplineNewComponent } from './pages/discipline-new/discipline-new.component';
import { DisciplineEditComponent } from './pages/discipline-edit/discipline-edit.component';
import { EnrollsComponent } from './pages/enrolls/enrolls.component';
import { EnrollDetailComponent } from './pages/enroll-detail/enroll-detail.component';
import { EnrollNewComponent } from './pages/enroll-new/enroll-new.component';
import { EnrollEditComponent } from './pages/enroll-edit/enroll-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsComponent } from './pages/students/students.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {   
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ClassDetailComponent,
    DisciplinesComponent,
    DisciplineDetailComponent,
    DisciplineNewComponent,
    DisciplineEditComponent,
    EnrollsComponent,
    EnrollDetailComponent,
    EnrollNewComponent,
    EnrollEditComponent,
    StudentsComponent,
    StudentDetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
