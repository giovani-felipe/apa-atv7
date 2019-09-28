import { NgModule } from '@angular/core';
import { DisciplinesComponent } from '../pages/disciplines/disciplines.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'disciplines',
    component: DisciplinesComponent,
    data: { title: 'Lista de Matrículas' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class DisciplineRoutingModule {}