import { NgModule } from '@angular/core';
import { StudentsComponent } from '../pages/students/students.component';
import { StudentDetailComponent } from '../pages/student-detail/student-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    data: { title: 'Lista de Turmas' }
  },
  {
    path: 'student-detail/:id',
    component: StudentDetailComponent,
    data: { title: 'Detalhe da Turma' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class StudentRoutingModule {}