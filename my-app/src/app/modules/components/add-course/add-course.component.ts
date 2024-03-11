import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { Course, LearningMode } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course: Course;
  private courses: Course[] = [];
  successMessage: string | undefined;

  constructor(private _courseService: CourseService) {
    this.course = new Course(0, '',  new Category('', '', ''), '', '', [], LearningMode.Frontal, '', '');
  }

  saveCourse() {
    // Implement save course logic here
    if (this.course.name !== '' &&
        this.course.category.name !== '' &&
        this.course.lessonCount !== '' &&
        this.course.startDate !== '' &&
        this.course.syllabus.length > 0 &&
        this.course.instructorCode !== '' &&
        this.course.image !== '' &&
        this.course.learningMode !== null) {
        this.addCourse(this.course);
        this.successMessage = 'Registration successful!';
    }
  }

  addSyllabusItem() {
    this.course.syllabus.push('');
  }

  removeSyllabusItem(index: number) {
    this.course.syllabus.splice(index, 1);
  }


   // Method to add a new course
   addCourse(course: Course): void {
    this.courses.push(course);
    this._courseService.postCourseToServer(this.courses).subscribe(data=>{
      if(data)
      alert("save success")
     });

  }
}
