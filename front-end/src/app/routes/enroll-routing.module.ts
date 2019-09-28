import { NgModule } from '@angular/core';
import { EnrollsComponent } from '../pages/enrolls/enrolls.component';
import { EnrollNewComponent } from '../pages/enroll-new/enroll-new.component';
import { EnrollEditComponent } from '../pages/enroll-edit/enroll-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'enrolls',
    component: EnrollsComponent,
    data: { title: 'Lista de Matrículas' }
  },
  {
    path: 'enroll-new',
    component: EnrollNewComponent,
    data: { title: 'Adicionar Matrícula' }
  },  
  {
    path: 'enroll-edit/:id',
    component: EnrollEditComponent,
    data: { title: 'Editar a Matrícula' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class EnrollRoutingModule {}