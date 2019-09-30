import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Enroll } from 'src/model/enroll';
import { Discipline } from 'src/model/discipline';
import { Student } from 'src/model/student';
import { Class } from 'src/model/class';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enrolls',
  templateUrl: './enrolls.component.html',
  styleUrls: ['./enrolls.component.scss']
})
export class EnrollsComponent implements OnInit {

  studentForm: FormGroup;
  selectFormControl = new FormControl('', Validators.required);
  displayedColumns: string[] = [ 'student', 'class', 'discipline', 'actions' ];
  enrolls: Enroll[];
  isLoadingResults: boolean;
  currentName: string;
  students: Student[];
  hasResults: boolean = false;

  constructor(private api: ApiService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      '_student' : [0, Validators.required]
    });
    this.getStudentNames();    
  }

  getStudentNames() {
    this.api.getAll<Student>("students")
    .subscribe(res => {
      this.students = res["data"];
    }, err => {
      console.log(err);
    });
  }

  setName<T>(element, id, entity)
  {
    this.api.getOne<T>(id, entity)
    .subscribe(res => {
      this.currentName = res["data"]["name"];
      this.setElementName(element, entity);
      //Set class name from discipline
      if(entity == "disciplines") this.setName<Class>(element, res["data"]["id_class"], "classes");
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });    
  } 

  setElementName(element, entity)  
  {
    element[entity] = this.currentName;
  }

  deleteEnroll(id) {
    if(confirm("Quer mesmo apagar a matrícula?")) {
      this.api.delete<Enroll>(id, "enrolls")
      .subscribe(res => {
        console.log("Matrícula removida com sucesso!");
      });
    }
  }

  openEdition(){
    this.router.navigate(['/enroll-new']);    
  }

  listEnrolls(id){
    this.api.getAll<Enroll>("enrolls")
    .subscribe(res => {
        var enrolls = res["data"].filter( e => e.id_student == id);

        this.hasResults = (enrolls && enrolls.length>0)? true : false;
        
        enrolls.forEach( dt => {
          this.setName<Student>(dt,dt.id_student, "students");
          this.setName<Discipline>(dt,dt.id_discipline, "disciplines");
        })
        this.enrolls = enrolls;
        console.log(this.enrolls);
      }, err => {
        console.log(err);
      });
      
    }

}
