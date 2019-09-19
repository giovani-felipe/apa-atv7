import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Class } from 'src/model/class';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-discipline-new',
  templateUrl: './discipline-new.component.html',
  styleUrls: ['./discipline-new.component.scss']
})
export class DisciplineNewComponent implements OnInit {

  disciplineForm: FormGroup;
  selectFormControl = new FormControl('', Validators.required);
  isLoadingResults = false;
  //TODO receive from back
  classes: Class[] = [
    {_id: '1', name_class: 'A', shift_class: 'Manhã', dt_update: new Date()},
    {_id: '2', name_class: 'B', shift_class: 'Tarde', dt_update: new Date()},
    {_id: '3', name_class: 'C', shift_class: 'Noite', dt_update: new Date()},
  ];

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.disciplineForm = this.formBuilder.group({
      'name_discipline' : [null, Validators.required],
      'desc_discipline' : [null, [Validators.required, Validators.minLength(4)]],
      'id_class' : [0, Validators.required]
    });
  }  

  addDiscipline(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addDiscipline(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/discipline-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
