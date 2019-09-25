import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Class } from 'src/model/class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discipline-new',
  templateUrl: './discipline-new.component.html',
  styleUrls: ['./discipline-new.component.scss']
})
export class DisciplineNewComponent implements OnInit {

  disciplineForm: FormGroup;
  selectFormControl = new FormControl('', Validators.required);
  isLoadingResults = false;
  baseURL = "http://localhost:8000/api";
  classes: Class[];

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.disciplineForm = this.formBuilder.group({
      'name_discipline' : [null, Validators.required],
      'desc_discipline' : [null, [Validators.required, Validators.minLength(4)]],
      'id_class' : [0, Validators.required]
    });
    this.getClasses();
  }  

  addDiscipline(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addDiscipline(form)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/discipline-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  getClasses(){
    this.httpClient.get(this.baseURL + '/turmas').subscribe((res)=>{
      this.classes = res["data"];
    });
  }

}
