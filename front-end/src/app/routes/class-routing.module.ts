import { NgModule } from '@angular/core';
import { ClassesComponent } from '../pages/classes/classes.component';
import { ClassDetailComponent } from '../pages/class-detail/class-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'classes',
    component: ClassesComponent,
    data: { title: 'Lista de Turmas' }
  },
  {
    path: 'class-detail/:id',
    component: ClassDetailComponent,
    data: { title: 'Detalhe da Turma' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class ClassRoutingModule {}