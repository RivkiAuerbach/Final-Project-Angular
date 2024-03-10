
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
@Injectable()
export class AllCoursesComponent {
@Input()
selectedCourse:Course |undefined;

courses: Course[] =[];

showCourse(selectedCourse:Course){
 this.selectedCourse=selectedCourse;
}
getCourses(){
  console.log("enter to get courses!");
   this._courseService. getCoursesFromServer().subscribe(
  data=>{
    data.map(x=>console.log(x.code +"❤️"));
    this.courses=data;
  },
  error =>{
    console.error('Error fetching courses: ' ,error);
  }
);

}

constructor(private _courseService:CourseService,private router: Router){
this.getCourses();
}

addCourseToList(){
  this.router.navigate(['/addCourse']);
}
}