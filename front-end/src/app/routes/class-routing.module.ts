import { NgModule } from '@angular/core';
import { ClassesComponent } from '../pages/classes/classes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'classes',
    component: ClassesComponent,
    data: { title: 'Lista de Turmas' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class ClassRoutingModule {}