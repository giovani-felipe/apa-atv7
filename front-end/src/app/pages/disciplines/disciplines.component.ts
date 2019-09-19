import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Discipline } from 'src/model/discipline';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'desc', 'class' ];
  dataSource: Discipline[];
  isLoadingResults: boolean;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getDisciplines()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
