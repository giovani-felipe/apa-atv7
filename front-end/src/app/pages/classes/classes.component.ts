import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Class } from 'src/model/class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'shift' ];
  dataSource: Class[];
  isLoadingResults: boolean;
  baseURL = "http://localhost:8000/api";

  constructor(private _api: ApiService, private httpClient: HttpClient) { }

  ngOnInit() {    
    this.getClasses();
    this.isLoadingResults = false;   
  }

  getClasses(){
    this.httpClient.get(this.baseURL + '/turmas').subscribe((res)=>{
      this.dataSource = res["data"];
    });
  }

}
