import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Class } from 'src/model/class';

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

  constructor(private api: ApiService) { }

  ngOnInit() {    
    this.api.getAll<Class>("classes")
    .subscribe(res => {      
      this.dataSource = res["data"];
      this.isLoadingResults = false;      
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });   
  }

}
