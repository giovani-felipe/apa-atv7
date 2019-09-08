import { NgModule } from '@angular/core';
import { DisciplinesComponent } from '../pages/disciplines/disciplines.component';
import { DisciplineDetailComponent } from '../pages/discipline-detail/discipline-detail.component';
import { DisciplineNewComponent } from '../pages/discipline-new/discipline-new.component';
import { DisciplineEditComponent } from '../pages/discipline-edit/discipline-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'disciplines',
    component: DisciplinesComponent,
    data: { title: 'Lista de Matrículas' }
  },
  {
    path: 'discipline-detail/:id',
    component: DisciplineDetailComponent,
    data: { title: 'Detalhe da Matrícula' }
  },
  {
    path: 'discipline-new',
    component: DisciplineNewComponent,
    data: { title: 'Adicionar Matrícula' }
  },  
  {
    path: 'discipline-edit/:id',
    component: DisciplineEditComponent,
    data: { title: 'Editar a Matrícula' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class DisciplineRoutingModule {}