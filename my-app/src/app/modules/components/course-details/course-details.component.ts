import { Component ,  Input, OnInit, NgModule} from '@angular/core';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  id: number | undefined;
  constructor(private courseService:CourseService) { }
  @Input() 
  course: Course | undefined; 


  ngOnInit(): void {

  }
}


