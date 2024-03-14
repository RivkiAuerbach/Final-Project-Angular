import { Component ,  Input, OnInit, NgModule, Output, EventEmitter} from '@angular/core';
import { Course,LearningMode } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { UsersService } from '../../services/user.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  id: number;
  constructor(private courseService:CourseService,private _userService: UsersService,private route: ActivatedRoute) { }
  @Input() 
  course: Course; 
  @Input()
  showCourseDetails=false;
  @Input()
  editCourse=false;


  check(): Observable<boolean> {
    const username = sessionStorage.getItem("username");
    console.log(username);
    return this._userService.getUserFromServer().pipe(
      map(dataFromServer => {
        for (const item of dataFromServer) {
          if (item.name === username && item.isInstructor) {
            return true;
           
          }
        }
       return false
      })
    );
  }
    toggleCourseDetails(){
 
    this.showCourseDetails = !this.showCourseDetails; 
  }
  showEditComponent() {
    this.editCourse = !this.editCourse;
  }
 
  isDateInNextWeek(startDate: string): boolean {
    const startDateAsDate = new Date(startDate);
    const now = new Date();
    const nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
    return startDateAsDate >= now && startDateAsDate <= nextWeek;
  }
  

 @Output()
  OnFocusCourse: EventEmitter<any> = new EventEmitter();
focusCourse: boolean = false;
cancelEditingHandler() {
  this.editCourse = false; 
}
handleFocus()
{
  if (!this.focusCourse) {
    this.OnFocusCourse.emit();
    this.focusCourse = true;
  }
}
isFrontalMode(learningMode: LearningMode): boolean {
  return learningMode === LearningMode.Frontal;
}

isZoomMode(learningMode: LearningMode): boolean {
  return learningMode === LearningMode.Zoom;
}
  ngOnInit(): void {
    
  }
}

