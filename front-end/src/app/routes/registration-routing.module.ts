import { NgModule } from '@angular/core';
import { RegistrationsComponent } from '../pages/registrations/registrations.component';
import { RegistrationDetailComponent } from '../pages/registration-detail/registration-detail.component';
import { RegistrationNewComponent } from '../pages/registration-new/registration-new.component';
import { RegistrationEditComponent } from '../pages/registration-edit/registration-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'registrations',
    component: RegistrationsComponent,
    data: { title: 'Lista de Matrículas' }
  },
  {
    path: 'registration-detail/:id',
    component: RegistrationDetailComponent,
    data: { title: 'Detalhe da Matrícula' }
  },
  {
    path: 'registration-new',
    component: RegistrationNewComponent,
    data: { title: 'Adicionar Matrícula' }
  },  
  {
    path: 'registration-edit/:id',
    component: RegistrationEditComponent,
    data: { title: 'Editar a Matrícula' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class RegistrationRoutingModule {}