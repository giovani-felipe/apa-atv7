import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassRoutingModule} from "./routes/class-routing.module";
import { EnrollRoutingModule } from "./routes/enroll-routing.module";
import { DisciplineRoutingModule } from './routes/discipline-routing.module';
import { StudentRoutingModule } from './routes/student-routing.module';

@NgModule({
  exports: [ RouterModule ],
  imports: [  
    ClassRoutingModule, 
    EnrollRoutingModule,
    DisciplineRoutingModule,
    StudentRoutingModule
   ]
})
export class AppRoutingModule { }
