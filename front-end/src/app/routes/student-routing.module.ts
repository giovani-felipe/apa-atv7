import { NgModule } from '@angular/core';
import { StudentsComponent } from '../pages/students/students.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    data: { title: 'Lista de Turmas' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class StudentRoutingModule {}