import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Student } from 'src/model/student';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'address', 'birth', 'email', 'phone', 'cpf' ];
  dataSource: Student[];
  isLoadingResults: boolean;
  baseURL = "http://localhost:8000/api";

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAll<Student>("students")
    .subscribe(res => {
      this.dataSource = res["data"];
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
