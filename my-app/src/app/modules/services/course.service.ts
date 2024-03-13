
import { Injectable } from "@angular/core";
import { Course } from "../models/course.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor(private _http: HttpClient) {}
//server
  getCoursesFromServer(): Observable<Course[]> {
    return this._http.get<Course[]>("api/Course");
  }
//server
  updateCourse(course: Course): Observable<Course> {
  // Construct the complete URL including the query parameter
  const url = `/api/Course?code=${course.code}`;

  // Use the course object as the request body
  return this._http.put<Course>(url, course).pipe(
    tap(updatedCourse => console.log('Course updated successfully:', updatedCourse))
  );
}
 //server
 addCourseToServer(course: Course): Observable<Course> {
  //  console.log(course);
  // course = {
  //   "code": 0,
  //   "name": "string",
  //   "category": {
  //     "code": 0,
  //     "name": "string",
  //     "iconRoute": "string"
  //   },
  //   "lessonCount": 0,
  //   "startDate": "2024-03-13T21:25:33.607Z",
  //   "syllabus": [
  //     "string"
  //   ],
  //   "learningMode": 0,
  //   "instructorCode": "string",
  //   "image": "string"
  // } 
  return this._http.post<Course>("/api/Course/", course);
}

}