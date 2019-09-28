import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Enroll } from 'src/model/enroll';
import { Discipline } from 'src/model/discipline';
import { Student } from 'src/model/student';
import { Class } from 'src/model/class';

@Component({
  selector: 'app-enrolls',
  templateUrl: './enrolls.component.html',
  styleUrls: ['./enrolls.component.scss']
})
export class EnrollsComponent implements OnInit {

  displayedColumns: string[] = [ 'student', 'class', 'discipline', "actions" ];
  dataSource: Enroll[];
  isLoadingResults: boolean;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAll<Enroll>("enrolls")
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
