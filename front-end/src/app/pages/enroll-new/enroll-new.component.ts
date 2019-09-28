import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Enroll } from 'src/model/enroll';
import { Class } from 'src/model/class';
import { Student } from 'src/model/student';
import { Discipline } from 'src/model/discipline';

@Component({
  selector: 'app-enroll-new',
  templateUrl: './enroll-new.component.html',
  styleUrls: ['./enroll-new.component.scss']
})

export class EnrollNewComponent implements OnInit {

enrollForm: FormGroup;
selectFormControl = new FormControl('', Validators.required);
selectFormControl2 = new FormControl('', Validators.required);
selectFormControl3 = new FormControl('', Validators.required);
isLoadingResults = false;
enrolls: Enroll[];
classes: Class[];
disciplines: Discipline[] = [];
students: Student[];

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.enrollForm = this.formBuilder.group({
      'id_student' : [0, Validators.required],
      'id_class' : [0, Validators.required],
      'id_discipline' : [0, Validators.required]
    });

    this.api.getAll<Class>("classes")
    .subscribe(res => {      
      this.classes = res["data"];
      this.isLoadingResults = false;      
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

    this.api.getAll<Student>("students")
    .subscribe(res => {      
      this.students = res["data"];
      this.isLoadingResults = false;      
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

  }

  addEnroll(form: NgForm) {
    this.isLoadingResults = true;

    this.api.add<Enroll>(form, "enroll")
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/enrolls']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  getDisciplines(id)
  {
    this.api.getAll<Discipline>("disciplines")
      .subscribe(res => {      
        this.disciplines = res["data"].filter(d => d.id_class==id);
        this.isLoadingResults = false;      
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
