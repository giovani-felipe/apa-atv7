import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Discipline } from 'src/model/discipline';
import { Class } from 'src/model/class';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'desc', 'class' ];
  dataSource: Discipline[];
  isLoadingResults: boolean;
  currentClass: Class;
  currentClassName: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAll<Discipline>("disciplines")
    .subscribe(res => {
      this.dataSource = res["data"];
      let elements = this.dataSource;
      elements.forEach(d => {        
        this.setClassName(d);
      })
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  setClassName(currentDiscipline) {
    this.api.getOne<Class>(currentDiscipline.id_class, "classes")
    .subscribe(res => {
      this.currentClassName = res["data"]["name"];
      this.setName(currentDiscipline);
    }, err => {
      console.log(err);
    });   
  }

  setName(currentDiscipline)
  {
    currentDiscipline["class"] = this.currentClassName;
  }


}
