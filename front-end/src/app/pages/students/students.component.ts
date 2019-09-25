import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(){
    this.httpClient.get(this.baseURL + '/alunos').subscribe((res)=>{
      this.dataSource = res["data"];
    });
  }

}
