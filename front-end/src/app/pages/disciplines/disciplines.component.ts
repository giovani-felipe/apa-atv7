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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAll<Discipline>("disciplines")
    .subscribe(res => {
      this.dataSource = res["data"];
      let elements = this.dataSource;
      elements.forEach(d => {
        console.log(this.getClassName(d.id_class));
        d["class"] = this.getClassName(d.id_class)["data"]["name"];
      })
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  getClassName(id) {
    return this.api.getOne<Class>(id, "classes");
  }


}
