import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassRoutingModule} from "./routes/class-routing.module";
import { RegistrationRoutingModule } from "./routes/registration-routing.module";
import { DisciplineRoutingModule } from './routes/discipline-routing.module';
import { StudentRoutingModule } from './routes/student-routing.module';

@NgModule({
  exports: [ RouterModule ],
  imports: [  
    ClassRoutingModule, 
    RegistrationRoutingModule,
    DisciplineRoutingModule,
    StudentRoutingModule
   ]
})
export class AppRoutingModule { }
