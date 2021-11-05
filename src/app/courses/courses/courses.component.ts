import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []; //pode ser declarado dentro do constructor
  displayedColumns = ['name','category'];

  constructor() {
    // this.courses =[];
  }

  ngOnInit(): void {
  }

}
