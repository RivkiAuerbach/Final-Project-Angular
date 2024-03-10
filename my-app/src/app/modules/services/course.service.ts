
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Course } from '../models/course.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private _http:HttpClient){}
  //server
  getCoursesFromServer():Observable<Course[]>{
    
    return this._http.get<Course[]>("api/Course");
  }

  //server
 postCourseToServer(course:Course[]): Observable<boolean>
 {   
   return this._http.post<boolean>("/api/Course/" ,course);
 }

}
